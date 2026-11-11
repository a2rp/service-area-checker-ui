import { useEffect, useMemo, useRef, useState } from "react";

import Header from "./components/header";
import HeroSection from "./components/heroSection";
import ZipCheckerForm from "./components/zipCheckerForm";
import ResultSummary from "./components/resultSummary";
import ServicesGrid from "./components/servicesGrid";
import CoverageDetails from "./components/coverageDetails";
import HowItWorks from "./components/howItWorks";
import TrustStrip from "./components/trustStrip";
import BottomCta from "./components/bottomCta";
import Footer from "./components/footer";
import GoToTop from "./components/goToTop";

import { findRegionByZip } from "./utils/findRegionByZip";

const App = () => {
    const [zipCode, setZipCode] = useState("");
    const [submittedZip, setSubmittedZip] = useState("");
    const [matchedRegion, setMatchedRegion] = useState(null);
    const [hasSearched, setHasSearched] = useState(false);
    const [error, setError] = useState("");
    const [activeSection, setActiveSection] = useState("top");

    const topRef = useRef(null);
    const checkerRef = useRef(null);
    const summaryRef = useRef(null);
    const servicesRef = useRef(null);
    const coverageRef = useRef(null);
    const howItWorksRef = useRef(null);

    const normalizedZip = useMemo(() => {
        return zipCode.replace(/\D/g, "").slice(0, 6);
    }, [zipCode]);

    const scrollToRef = (sectionRef) => {
        if (!sectionRef?.current) {
            return;
        }

        const header = document.querySelector(".siteHeader");

        const headerHeight = header ? header.getBoundingClientRect().height : 0;

        const sectionTop =
            sectionRef.current.getBoundingClientRect().top +
            window.scrollY -
            headerHeight -
            12;

        window.scrollTo({
            top: Math.max(sectionTop, 0),
            behavior: "smooth",
        });
    };

    const handleNavigate = (section) => {
        const sectionRefs = {
            top: topRef,
            checker: checkerRef,
            services: servicesRef,
            coverage: coverageRef,
            howItWorks: howItWorksRef,
        };

        if (
            !hasSearched &&
            (section === "services" || section === "coverage")
        ) {
            setActiveSection("checker");
            scrollToRef(checkerRef);
            return;
        }

        setActiveSection(section);
        scrollToRef(sectionRefs[section]);
    };

    const handleCheckZip = () => {
        const cleanZip = normalizedZip.trim();

        if (!cleanZip) {
            setError("Please enter an Indian PIN code.");
            setHasSearched(false);
            setMatchedRegion(null);
            setSubmittedZip("");
            return;
        }

        if (!/^\d{6}$/.test(cleanZip)) {
            setError("Please enter a valid 6-digit Indian PIN code.");
            setHasSearched(false);
            setMatchedRegion(null);
            setSubmittedZip("");
            return;
        }

        const region = findRegionByZip(cleanZip);

        setError("");
        setSubmittedZip(cleanZip);
        setMatchedRegion(region);
        setHasSearched(true);
        setZipCode(cleanZip);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                scrollToRef(summaryRef);
            });
        });
    };

    const handleReset = () => {
        setZipCode("");
        setSubmittedZip("");
        setMatchedRegion(null);
        setHasSearched(false);
        setError("");
        setActiveSection("checker");

        requestAnimationFrame(() => {
            scrollToRef(checkerRef);
        });
    };

    useEffect(() => {
        const sectionMap = [
            {
                name: "top",
                ref: topRef,
            },
            {
                name: "checker",
                ref: checkerRef,
            },
            {
                name: "services",
                ref: servicesRef,
            },
            {
                name: "coverage",
                ref: coverageRef,
            },
            {
                name: "howItWorks",
                ref: howItWorksRef,
            },
        ];

        const observer = new IntersectionObserver(
            (entries) => {
                const visibleEntries = entries
                    .filter((entry) => entry.isIntersecting)
                    .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

                const mostVisible = visibleEntries[0];

                if (!mostVisible) {
                    return;
                }

                const matchedSection = sectionMap.find(
                    (section) => section.ref.current === mostVisible.target,
                );

                if (!matchedSection) {
                    return;
                }

                if (
                    !hasSearched &&
                    (matchedSection.name === "services" ||
                        matchedSection.name === "coverage")
                ) {
                    return;
                }

                setActiveSection(matchedSection.name);
            },
            {
                root: null,
                rootMargin: "-90px 0px -45% 0px",
                threshold: [0.1, 0.25, 0.5, 0.75],
            },
        );

        sectionMap.forEach((section) => {
            if (section.ref.current) {
                observer.observe(section.ref.current);
            }
        });

        return () => {
            observer.disconnect();
        };
    }, [hasSearched]);

    return (
        <>
            <Header
                hasSearched={hasSearched}
                activeSection={activeSection}
                onNavigate={handleNavigate}
            />

            <main className="appMain">
                <div ref={topRef} className="topSection">
                    <HeroSection
                        onGoChecker={() => handleNavigate("checker")}
                        onGoCoverage={() => handleNavigate("coverage")}
                    />
                </div>

                <div ref={checkerRef} className="checkerSection">
                    <ZipCheckerForm
                        zipCode={zipCode}
                        setZipCode={setZipCode}
                        handleCheckZip={handleCheckZip}
                        error={error}
                    />
                </div>

                <div ref={summaryRef} className="resultSection">
                    <ResultSummary
                        submittedZip={submittedZip}
                        matchedRegion={matchedRegion}
                        hasSearched={hasSearched}
                    />
                </div>

                <div ref={servicesRef} className="servicesSection">
                    <ServicesGrid
                        matchedRegion={matchedRegion}
                        hasSearched={hasSearched}
                    />
                </div>

                <div ref={coverageRef} className="coverageSection">
                    <CoverageDetails
                        matchedRegion={matchedRegion}
                        hasSearched={hasSearched}
                    />
                </div>

                <div ref={howItWorksRef} className="howItWorksSection">
                    <HowItWorks />
                </div>

                <div className="trustSection">
                    <TrustStrip />
                </div>

                <div className="bottomCtaSection">
                    <BottomCta handleReset={handleReset} />
                </div>
            </main>

            <Footer />

            <GoToTop />
        </>
    );
};

export default App;
