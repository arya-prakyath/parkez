interface vehicleType {
    vehiclePlateNumber: string,
    vehicleName: string,
    vehicleType: string,
}

const vehiclesList: vehicleType[] = [
    {
        vehicleName: "My VW",
        vehiclePlateNumber: "KA 02 JH 2354",
        vehicleType: "4 Wheeler",
    },
    {
        vehicleName: "Office Bike",
        vehiclePlateNumber: "KA 25 ER 8742",
        vehicleType: "2 Wheeler",
    },
    {
        vehicleName: "Wife's Car",
        vehiclePlateNumber: "AP 09 BH 5638",
        vehicleType: "4 Wheeler",
    },
    {
        vehicleName: "Friends's Car",
        vehiclePlateNumber: "KA 23 HU 6752",
        vehicleType: "4 Wheeler",
    },
    {
        vehicleName: "Old Bike - Pulsar",
        vehiclePlateNumber: "MH 56 JJ 5672",
        vehicleType: "4 Wheeler",
    },
];

export default vehiclesList;