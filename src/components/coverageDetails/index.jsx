import {
    FiActivity,
    FiMap,
    FiMapPin,
    FiNavigation,
    FiRadio,
    FiServer,
    FiTool,
    FiUsers,
} from "react-icons/fi";

import { Styled } from "./styled";

const coverageReasons = [
    {
        icon: FiUsers,
        title: "Technician Coverage",
        description:
            "Certain services require specialized technicians and are only enabled where those teams are actively assigned.",
    },
    {
        icon: FiNavigation,
        title: "Branch Reach",
        description:
            "Service hubs operate within dispatch radius limits to keep travel time practical and response consistent.",
    },
    {
        icon: FiTool,
        title: "Equipment Availability",
        description:
            "Specialized tools and service vehicles may only be available in selected regions or higher-priority zones.",
    },
    {
        icon: FiActivity,
        title: "Dispatch Load",
        description:
            "Capacity can vary by area based on route load, scheduling demand, and emergency prioritization.",
    },
];

const CoverageDetails = ({ matchedRegion, hasSearched }) => {
    if (!hasSearched || !matchedRegion) {
        return null;
    }

    const coverageItems = [
        {
            icon: FiMap,
            label: "Service Region",
            value: matchedRegion.name,
        },
        {
            icon: FiRadio,
            label: "Coverage Tier",
            value: matchedRegion.tierLabel,
        },
        {
            icon: FiNavigation,
            label: "Dispatch Radius",
            value: matchedRegion.dispatchRadius,
        },
        {
            icon: FiMapPin,
            label: "Nearest Hub",
            value: matchedRegion.hub,
        },
        {
            icon: FiUsers,
            label: "Weekend Support",
            value: matchedRegion.weekendSupport,
        },
        {
            icon: FiActivity,
            label: "Emergency Routing",
            value: matchedRegion.emergencyRouting,
        },
        {
            icon: FiServer,
            label: "Branch Capacity",
            value: matchedRegion.branchCapacity,
        },
    ];

    return (
        <Styled.Wrapper className="coverageDetails">
            <div className="coverageInner">
                <div className="sectionHeader">
                    <div>
                        <span className="eyebrow">03 / COVERAGE DETAILS</span>

                        <h2>
                            Regional service
                            <span>coverage.</span>
                        </h2>
                    </div>

                    <p>
                        This PIN code matches a sample region. The routing,
                        response, and capacity details are illustrative data
                        for this interface demo.
                    </p>
                </div>

                <div className="coverageLayout">
                    <div className="networkCard">
                        <div className="networkTop">
                            <div>
                                <span className="panelLabel">SAMPLE REGION</span>

                                <h3>{matchedRegion.name}</h3>
                            </div>

                            <span className="networkStatus">
                                <i />
                                Demo data
                            </span>
                        </div>

                        <div className="networkMap">
                            <div className="mapGrid" />

                            <div className="signalRing ringOne" />
                            <div className="signalRing ringTwo" />

                            <div className="hubPoint">
                                <span>
                                    <FiMapPin />
                                </span>

                                <div>
                                    <small>PRIMARY HUB</small>
                                    <strong>{matchedRegion.hub}</strong>
                                </div>
                            </div>

                            <span className="zoneTag zoneOne">
                                Coverage Zone
                            </span>

                            <span className="zoneTag zoneTwo">
                                Dispatch Network
                            </span>
                        </div>

                        <div className="networkMeta">
                            <div>
                                <span>Coverage Tier</span>
                                <strong>{matchedRegion.tierLabel}</strong>
                            </div>

                            <div>
                                <span>Dispatch Radius</span>
                                <strong>{matchedRegion.dispatchRadius}</strong>
                            </div>

                            <div>
                                <span>Branch Capacity</span>
                                <strong>{matchedRegion.branchCapacity}</strong>
                            </div>
                        </div>
                    </div>

                    <div className="detailsPanel">
                        <div className="panelHeading">
                            <span>REGIONAL OPERATIONS</span>

                            <h3>Coverage information</h3>
                        </div>

                        <div className="detailsList">
                            {coverageItems.map((item) => {
                                const Icon = item.icon;

                                return (
                                    <article key={item.label}>
                                        <span className="detailIcon">
                                            <Icon />
                                        </span>

                                        <div>
                                            <span className="detailLabel">
                                                {item.label}
                                            </span>

                                            <strong>{item.value}</strong>
                                        </div>
                                    </article>
                                );
                            })}
                        </div>
                    </div>
                </div>

                <div className="logicSection">
                    <div className="logicHeader">
                        <span>AVAILABILITY LOGIC</span>

                        <h3>Why service availability can vary by PIN code.</h3>
                    </div>

                    <div className="logicGrid">
                        {coverageReasons.map((reason, index) => {
                            const Icon = reason.icon;

                            return (
                                <article key={reason.title}>
                                    <div className="reasonTop">
                                        <span className="reasonNumber">
                                            {String(index + 1).padStart(2, "0")}
                                        </span>

                                        <span className="reasonIcon">
                                            <Icon />
                                        </span>
                                    </div>

                                    <h4>{reason.title}</h4>

                                    <p>{reason.description}</p>
                                </article>
                            );
                        })}
                    </div>
                </div>
            </div>
        </Styled.Wrapper>
    );
};

export default CoverageDetails;
