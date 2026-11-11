import React from "react";
import {
    FiArrowDown,
    FiCheckCircle,
    FiClock,
    FiMap,
    FiMapPin,
    FiShield,
    FiZap,
} from "react-icons/fi";

import { Styled } from "./styled";

const HeroSection = ({ onGoChecker, onGoCoverage }) => {
    return (
        <Styled.Wrapper className="heroSection">
            <div className="heroGrid" />

            <div className="heroGlow heroGlowOne" />
            <div className="heroGlow heroGlowTwo" />

            <div className="heroInner">
                <div className="heroContent">
                    <div className="eyebrow">
                        <span className="statusDot" />
                        <span>Service Area Demo</span>
                    </div>

                    <h1>
                        Preview service coverage
                        <span>with sample PIN results.</span>
                    </h1>

                    <p className="heroDescription">
                        Try sample Bengaluru PIN codes to explore how a service
                        area checker can present regional coverage and
                        service-by-service results.
                    </p>

                    <div className="heroActions">
                        <button
                            className="primaryAction"
                            type="button"
                            onClick={onGoChecker}
                        >
                            Try a sample PIN code
                            <FiArrowDown />
                        </button>

                        <button
                            className="secondaryAction"
                            type="button"
                            onClick={onGoCoverage}
                        >
                            <FiMap />
                            Explore coverage
                        </button>
                    </div>

                    <div className="trustRow">
                        <span>
                            <FiCheckCircle />
                            Instant availability check
                        </span>

                        <span>
                            <FiShield />
                            No sign-up needed
                        </span>

                        <span>
                            <FiClock />
                            Illustrative sample data
                        </span>
                    </div>
                </div>

                <div className="heroPanel">
                    <div className="panelHeader">
                        <div>
                            <span>SAMPLE NETWORK</span>
                            <strong>Coverage Status</strong>
                        </div>

                        <span className="liveStatus">
                            <i />
                            Demo
                        </span>
                    </div>

                    <div className="mapPreview">
                        <div className="mapGrid" />

                        <span className="mapPoint pointOne">
                            <i />
                            North
                        </span>

                        <span className="mapPoint pointTwo">
                            <i />
                            Central
                        </span>

                        <span className="mapPoint pointThree">
                            <i />
                            South
                        </span>

                        <div className="mapCenter">
                            <FiMapPin />
                        </div>
                    </div>

                    <div className="panelStats">
                        <article>
                            <span>01</span>
                            <strong>8</strong>
                            <p>Sample services</p>
                        </article>

                        <article>
                            <span>02</span>
                            <strong>3</strong>
                            <p>Sample regions</p>
                        </article>

                        <article>
                            <span>03</span>
                            <strong>6-digit</strong>
                            <p>Indian PIN format</p>
                        </article>

                        <article>
                            <span>04</span>
                            <strong>
                                <FiZap />
                                Local
                            </strong>
                            <p>Demo matching</p>
                        </article>
                    </div>
                </div>
            </div>

            <div className="heroFooter">
                <span>SCROLL TO CHECK AVAILABILITY</span>

                <button
                    type="button"
                    onClick={onGoChecker}
                    aria-label="Go to PIN code checker"
                >
                    <FiArrowDown />
                </button>
            </div>
        </Styled.Wrapper>
    );
};

export default HeroSection;
