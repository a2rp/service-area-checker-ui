import { FiArrowUpRight, FiMapPin, FiRefreshCw } from "react-icons/fi";

import { Styled } from "./styled";

const BottomCta = ({ handleReset }) => {
    return (
        <Styled.Wrapper className="bottomCta">
            <div className="ctaGrid" />

            <div className="ctaInner">
                <div className="ctaContent">
                    <span className="eyebrow">READY TO CHECK AGAIN?</span>

                    <h2>
                        Find service
                        <span>availability fast.</span>
                    </h2>

                    <p>
                        Try another sample PIN code to compare the example
                        regions, hubs, and service statuses in this demo.
                    </p>

                    <div className="ctaActions">
                        <button
                            className="primaryAction"
                            type="button"
                            onClick={handleReset}
                        >
                            <FiRefreshCw />
                            Try another PIN code
                        </button>

                        <a
                            className="secondaryAction"
                            href="https://github.com/a2rp/service-area-checker-ui"
                            target="_blank"
                            rel="noreferrer"
                        >
                            View repository
                            <FiArrowUpRight />
                        </a>
                    </div>
                </div>

                <div className="ctaPanel">
                    <div className="panelIcon">
                        <FiMapPin />
                    </div>

                    <div className="panelContent">
                        <span>LOCATION LOOKUP</span>

                        <strong>
                            One PIN code.
                            <br />
                            Clear coverage.
                        </strong>

                        <p>
                            Enter a sample Indian PIN code to review the
                            illustrative service-area results.
                        </p>
                    </div>

                    <div className="panelFooter">
                        <span>
                            <i />
                            Checker ready
                        </span>

                        <span>6-digit PIN</span>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default BottomCta;
