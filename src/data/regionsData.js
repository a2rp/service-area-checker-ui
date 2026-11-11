export const regionsData = [
    {
        id: "east-bangalore",
        name: "East Bangalore",
        zipCodes: ["560037", "560048", "560066", "560067"],
        hub: "Whitefield Service Center",
        coverageStatus: "full",
        eta: "2 to 4 hours",
        dispatchRadius: "Up to 18 km",
        weekendSupport: "Available",
        emergencyRouting: "Enabled",
        branchCapacity: "High",
        tierLabel: "Tier A Coverage Zone",
        services: {
            plumbing: {
                status: "available",
                note: "Same-day support available",
            },
            drainCleaning: {
                status: "available",
                note: "Available in all active zones",
            },
            waterHeaterRepair: {
                status: "available",
                note: "Technician assignment required",
            },
            leakDetection: {
                status: "limited",
                note: "Available in selected PIN-code clusters",
            },
            electricalRepairs: {
                status: "limited",
                note: "Only covered by selected hubs",
            },
            sewerLineService: {
                status: "unavailable",
                note: "Not included in this sample PIN-code region",
            },
            emergencyVisit: {
                status: "available",
                note: "24/7 only in high-priority zones",
            },
            installationService: {
                status: "available",
                note: "Appointment slot may apply",
            },
        },
    },
    {
        id: "central-bangalore",
        name: "Central Bangalore",
        zipCodes: ["560001", "560002", "560027", "560030"],
        hub: "Richmond Town Hub",
        coverageStatus: "full",
        eta: "1 to 3 hours",
        dispatchRadius: "Up to 14 km",
        weekendSupport: "Available",
        emergencyRouting: "Enabled",
        branchCapacity: "High",
        tierLabel: "Tier A Coverage Zone",
        services: {
            plumbing: {
                status: "available",
                note: "Fast routing available",
            },
            drainCleaning: {
                status: "available",
                note: "Available across central zones",
            },
            waterHeaterRepair: {
                status: "limited",
                note: "Based on technician schedule",
            },
            leakDetection: {
                status: "available",
                note: "Inspection support available",
            },
            electricalRepairs: {
                status: "available",
                note: "Covered by partner technicians",
            },
            sewerLineService: {
                status: "limited",
                note: "Depends on equipment availability",
            },
            emergencyVisit: {
                status: "available",
                note: "Priority dispatch supported",
            },
            installationService: {
                status: "available",
                note: "Advance slot may be required",
            },
        },
    },
    {
        id: "north-bangalore",
        name: "North Bangalore",
        zipCodes: ["560063", "560064", "560092", "560097"],
        hub: "Hebbal Service Hub",
        coverageStatus: "partial",
        eta: "4 to 8 hours",
        dispatchRadius: "Up to 22 km",
        weekendSupport: "Limited",
        emergencyRouting: "Selected areas only",
        branchCapacity: "Medium",
        tierLabel: "Tier B Coverage Zone",
        services: {
            plumbing: {
                status: "available",
                note: "Core support available",
            },
            drainCleaning: {
                status: "available",
                note: "Available in active routes",
            },
            waterHeaterRepair: {
                status: "limited",
                note: "Subject to technician availability",
            },
            leakDetection: {
                status: "limited",
                note: "Coverage is cluster-based",
            },
            electricalRepairs: {
                status: "unavailable",
                note: "Currently not served in this zone",
            },
            sewerLineService: {
                status: "unavailable",
                note: "Specialized support not assigned",
            },
            emergencyVisit: {
                status: "limited",
                note: "Emergency support in selected pockets",
            },
            installationService: {
                status: "available",
                note: "Booking slot required",
            },
        },
    },
];
