import { useEffect, useState } from "react";
import {
    FiArrowUpRight,
    FiGithub,
    FiMapPin,
    FiMenu,
    FiX,
} from "react-icons/fi";

import { Styled } from "./styled";

const Header = ({ hasSearched, activeSection, onNavigate }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const navItems = [
        {
            label: "Checker",
            target: "checker",
        },
        {
            label: "Services",
            target: "services",
            requiresSearch: true,
        },
        {
            label: "Coverage",
            target: "coverage",
            requiresSearch: true,
        },
        {
            label: "How It Works",
            target: "howItWorks",
        },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        handleScroll();

        window.addEventListener("scroll", handleScroll, {
            passive: true,
        });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    const handleNavigation = (target) => {
        setIsMenuOpen(false);
        onNavigate(target);
    };

    return (
        <Styled.Wrapper
            className={`siteHeader ${isScrolled ? "scrolled" : ""}`}
        >
            <div className="headerInner">
                <button
                    className={`brand ${
                        activeSection === "top" ? "active" : ""
                    }`}
                    type="button"
                    onClick={() => handleNavigation("top")}
                    aria-label="Go to top"
                >
                    <span className="brandIcon">
                        <FiMapPin />
                    </span>

                    <span className="brandText">
                        <strong>Service Area</strong>
                        <span>Checker</span>
                    </span>
                </button>

                <nav className="desktopNav" aria-label="Primary navigation">
                    {navItems.map((item) => {
                        const isActive = activeSection === item.target;

                        return (
                            <button
                                key={item.target}
                                className={isActive ? "active" : ""}
                                type="button"
                                onClick={() => handleNavigation(item.target)}
                            >
                                <span>{item.label}</span>

                                {item.requiresSearch && !hasSearched && (
                                    <small>CHECK ZIP FIRST</small>
                                )}
                            </button>
                        );
                    })}
                </nav>

                <div className="headerActions">
                    <a
                        className="githubLink"
                        href="https://github.com/a2rp/service-area-checker-ui"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <FiGithub />

                        <span>Repository</span>

                        <FiArrowUpRight />
                    </a>

                    <button
                        className="menuButton"
                        type="button"
                        onClick={() => setIsMenuOpen((current) => !current)}
                        aria-label={
                            isMenuOpen
                                ? "Close navigation menu"
                                : "Open navigation menu"
                        }
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <FiX /> : <FiMenu />}
                    </button>
                </div>
            </div>

            <div className={`mobileMenu ${isMenuOpen ? "open" : ""}`}>
                <nav aria-label="Mobile navigation">
                    {navItems.map((item, index) => {
                        const isActive = activeSection === item.target;

                        return (
                            <button
                                key={item.target}
                                className={isActive ? "active" : ""}
                                type="button"
                                onClick={() => handleNavigation(item.target)}
                            >
                                <span className="menuNumber">
                                    {String(index + 1).padStart(2, "0")}
                                </span>

                                <span className="menuContent">
                                    <strong>{item.label}</strong>

                                    {item.requiresSearch && !hasSearched && (
                                        <small>Check ZIP first</small>
                                    )}
                                </span>

                                <FiArrowUpRight />
                            </button>
                        );
                    })}
                </nav>
            </div>
        </Styled.Wrapper>
    );
};

export default Header;
