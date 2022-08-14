interface vehicleType {
    vehiclePlateNumber: string,
    vehicleName: string,
    vehicleType: string,
    phoneNumber: string,
}

const vehiclesList: vehicleType[] = [
    {
        vehicleName: "My VW",
        vehiclePlateNumber: "KA 02 JH 2354",
        vehicleType: "4 Wheeler",
        phoneNumber: "6362881710",
    },
    {
        vehicleName: "Office Bike",
        vehiclePlateNumber: "KA 25 ER 8742",
        vehicleType: "2 Wheeler",
        phoneNumber: "8753462789",
    },
    {
        vehicleName: "Wife's Car",
        vehiclePlateNumber: "AP 09 BH 5638",
        vehicleType: "4 Wheeler",
        phoneNumber: "7625419287",
    },
    {
        vehicleName: "Friend's Car",
        vehiclePlateNumber: "KA 23 HU 6752",
        vehicleType: "4 Wheeler",
        phoneNumber: "9087256425",
    },
    {
        vehicleName: "Old Bike - Pulsar",
        vehiclePlateNumber: "MH 56 JJ 5672",
        vehicleType: "4 Wheeler",
        phoneNumber: "7865243980",
    },
];

export default vehiclesList;