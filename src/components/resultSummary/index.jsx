import {
    FiAlertTriangle,
    FiCheckCircle,
    FiClock,
    FiMapPin,
    FiNavigation,
} from "react-icons/fi";

import { Styled } from "./styled";

const coverageLabelMap = {
    full: "Full Sample Match",
    partial: "Partial Sample Match",
    unavailable: "No Sample Match",
};

const coverageClassMap = {
    full: "available",
    partial: "limited",
    unavailable: "unavailable",
};

const ResultSummary = ({ submittedZip, matchedRegion, hasSearched }) => {
    if (!hasSearched) {
        return null;
    }

    const isOutOfArea = !matchedRegion;

    const coverageStatus = isOutOfArea
        ? "unavailable"
        : matchedRegion.coverageStatus;

    const coverageLabel =
        coverageLabelMap[coverageStatus] || "Coverage Available";

    const coverageClassName = coverageClassMap[coverageStatus] || "available";

    const StatusIcon =
        coverageStatus === "unavailable" ? FiAlertTriangle : FiCheckCircle;

    return (
        <Styled.Wrapper className="resultSummary">
            <div className="resultInner">
                <div className={`resultCard ${coverageClassName}`}>
                    <div className="statusColumn">
                        <div className="statusIcon">
                            <StatusIcon />
                        </div>

                        <span className="statusLabel">Coverage result</span>

                        <strong className="statusValue">{coverageLabel}</strong>

                        <span className="statusZip">
                            PIN {submittedZip || "-"}
                        </span>
                    </div>

                    <div className="resultContent">
                        <div className="resultHeader">
                            <div>
                                <span className="eyebrow">
                                    SAMPLE COVERAGE RESULT
                                </span>

                                <h2>
                                    {isOutOfArea
                                        ? "No sample region found."
                                        : "Sample region matched."}
                                </h2>
                            </div>

                            <span
                                className={`coverageBadge ${coverageClassName}`}
                            >
                                <i />
                                {coverageLabel}
                            </span>
                        </div>

                        <p className="resultDescription">
                            {isOutOfArea
                                ? "This PIN code is not included in the sample dataset. Try one of the suggested Bengaluru examples to explore the demo."
                                : "This PIN code matches a sample region. The hub, response window, and service statuses below are illustrative demo values."}
                        </p>

                        <div className="resultGrid">
                            <article>
                                <span className="infoIcon">
                                    <FiMapPin />
                                </span>

                                <div>
                                    <span className="infoLabel">PIN Code</span>

                                    <strong>{submittedZip || "-"}</strong>
                                </div>
                            </article>

                            <article>
                                <span className="infoIcon">
                                    <FiNavigation />
                                </span>

                                <div>
                                    <span className="infoLabel">Region</span>

                                    <strong>
                                        {matchedRegion?.name || "Not Available"}
                                    </strong>
                                </div>
                            </article>

                            <article>
                                <span className="infoIcon">
                                    <FiMapPin />
                                </span>

                                <div>
                                    <span className="infoLabel">
                                        Nearest Hub
                                    </span>

                                    <strong>
                                        {matchedRegion?.hub || "Not Assigned"}
                                    </strong>
                                </div>
                            </article>

                            <article>
                                <span className="infoIcon">
                                    <FiClock />
                                </span>

                                <div>
                                    <span className="infoLabel">
                                        Estimated Response
                                    </span>

                                    <strong>
                                        {matchedRegion?.eta || "Unavailable"}
                                    </strong>
                                </div>
                            </article>
                        </div>

                        <div className="resultFooter">
                            <span>
                                <i />
                                Sample lookup completed
                            </span>

                            <span>Result generated for {submittedZip}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default ResultSummary;
