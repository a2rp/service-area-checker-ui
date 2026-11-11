import { FiCheck, FiClock, FiTool, FiZap } from "react-icons/fi";

import { Styled } from "./styled";

const ServicesGrid = ({ matchedRegion, hasSearched }) => {
    if (!hasSearched) {
        return null;
    }

    const services = matchedRegion?.services || [];

    return (
        <Styled.Wrapper className="servicesGrid">
            <div className="servicesInner">
                <div className="sectionHeader">
                    <div>
                        <span className="eyebrow">
                            02 / SERVICE AVAILABILITY
                        </span>

                        <h2>
                            Services in
                            <span>your area.</span>
                        </h2>
                    </div>

                    <p>
                        Availability may vary by location, operating window,
                        technician capacity, and regional support coverage.
                    </p>
                </div>

                {services.length > 0 ? (
                    <div className="servicesList">
                        {services.map((service, index) => {
                            const statusClass =
                                service.status === "available"
                                    ? "available"
                                    : service.status === "limited"
                                      ? "limited"
                                      : "unavailable";

                            return (
                                <article
                                    key={`${service.name}-${index}`}
                                    className={`serviceCard ${statusClass}`}
                                >
                                    <div className="cardTop">
                                        <span className="serviceNumber">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="serviceStatus">
                                            <i />
                                            {service.status}
                                        </span>
                                    </div>

                                    <div className="serviceIcon">
                                        {service.status === "available" ? (
                                            <FiCheck />
                                        ) : service.status === "limited" ? (
                                            <FiClock />
                                        ) : (
                                            <FiTool />
                                        )}
                                    </div>

                                    <h3>{service.name}</h3>

                                    <p>
                                        {service.description ||
                                            "Sample availability is determined by the illustrative region data bundled with this demo."}
                                    </p>

                                    <div className="cardFooter">
                                        <span>
                                            {service.status === "available"
                                                ? "Available in sample data"
                                                : service.status === "limited"
                                                  ? "Limited in sample data"
                                                  : "Unavailable in sample data"}
                                        </span>

                                        <FiZap />
                                    </div>
                                </article>
                            );
                        })}
                    </div>
                ) : (
                    <div className="emptyState">
                        <div className="emptyIcon">
                            <FiTool />
                        </div>

                        <div>
                            <span>NO SAMPLE SERVICES</span>

                            <h3>
                                No sample coverage is listed for this PIN code.
                            </h3>

                            <p>
                                Try one of the sample Bengaluru PIN codes to
                                explore the example service states.
                            </p>
                        </div>
                    </div>
                )}
            </div>
        </Styled.Wrapper>
    );
};

export default ServicesGrid;
