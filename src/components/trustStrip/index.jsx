import { FiActivity, FiClock, FiMap, FiShield } from "react-icons/fi";

import { Styled } from "./styled";

const trustItems = [
    {
        icon: FiMap,
        value: "Regional",
        label: "Coverage Mapping",
        description:
            "PIN-code lookup matches the illustrative Bengaluru regions bundled with this demo.",
    },
    {
        icon: FiClock,
        value: "6-digit",
        label: "Indian PIN Format",
        description:
            "The sample lookup accepts six-digit Indian PIN codes.",
    },
    {
        icon: FiShield,
        value: "No Signup",
        label: "Simple Lookup",
        description:
            "Check availability directly without creating an account or sharing unnecessary details.",
    },
    {
        icon: FiActivity,
        value: "Instant",
        label: "Sample Result",
        description:
            "Results are generated locally from sample data; no provider is contacted.",
    },
];

const TrustStrip = () => {
    return (
        <Styled.Wrapper className="trustStrip">
            <div className="trustInner">
                <div className="trustIntro">
                    <span className="eyebrow">NETWORK CONFIDENCE</span>

                    <h2>
                        Clear coverage.
                        <span>Better decisions.</span>
                    </h2>

                    <p>
                        The checker is designed to make service availability
                        easier to understand before scheduling or contacting
                        support.
                    </p>
                </div>

                <div className="trustGrid">
                    {trustItems.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <article key={item.label}>
                                <div className="itemTop">
                                    <span className="itemNumber">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>

                                    <span className="itemIcon">
                                        <Icon />
                                    </span>
                                </div>

                                <strong className="itemValue">
                                    {item.value}
                                </strong>

                                <h3>{item.label}</h3>

                                <p>{item.description}</p>
                            </article>
                        );
                    })}
                </div>

                <div className="networkFooter">
                    <div className="networkState">
                        <span className="liveDot" />

                        <div>
                            <span>SYSTEM STATUS</span>
                            <strong>Demo interface ready</strong>
                        </div>
                    </div>

                    <div className="networkLine">
                        <span />
                    </div>

                    <span className="networkMessage">
                        Built for fast service-area discovery
                    </span>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default TrustStrip;
