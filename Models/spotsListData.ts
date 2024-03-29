import costIntervals from "./costIntervalsData";

interface spotCostType {
    id: number,
    cost: string,
    interval: string,
}

interface spotItemType {
    id: string;
    name: string;
    address: string;
    cost: spotCostType[];
    contact: string;
    spotsTotalCount: number;
    spotsAvailableCount: number;
    spotsConsumedCount: number;
    extraNotes?: string | undefined;
    longitute: string;
    latitude: string;
    isFavorite: boolean;
}

const spotsList: spotItemType[] = [
    {
        id: "10",
        name: "Orion Mall",
        address: "Dr Rajkumar Rd, Rajajinagar, Bengaluru, Karnataka 560055",
        cost: [{ id: 1, cost: "20", interval: "Hour" }],
        contact: "9862715625",
        spotsTotalCount: 500,
        spotsAvailableCount: 300,
        spotsConsumedCount: 200,
        extraNotes: "Parking not available after 11 PM",
        longitute: "13.006645476795574",
        latitude: "77.5542310966088",
        isFavorite: false,
    },
    {
        id: "20",
        name: "Jetlag Restobar",
        address: "Industrial Suburb, 3, Dr Rajkumar Rd, opp. to Sherton Hotel, Rajajinagar, Bengaluru, Karnataka 560010",
        cost: [{ id: 1, cost: "10", interval: "Hour" }, { id: 2, cost: "20", interval: " 3 Hour" }],
        contact: "9872561872",
        spotsTotalCount: 50,
        spotsAvailableCount: 10,
        spotsConsumedCount: 40,
        extraNotes: "Closes at 1 AM",
        longitute: "13.012248684107798",
        latitude: "77.55418104604472",
        isFavorite: true,
    },
    {
        id: "30",
        name: "Iskcon Temple",
        address: "Hare Krishna Hill, Chord Rd, Rajajinagar, Bengaluru, Karnataka 560010",
        cost: [{ id: 1, cost: "20", interval: "Hour" }],
        contact: "6728917862",
        spotsTotalCount: 200,
        spotsAvailableCount: 162,
        spotsConsumedCount: 38,
        extraNotes: "5AM - 11AM and 4PM - 8PM on weekdays. 5AM - 10PM on weekends and public holidays",
        longitute: "13.010251007114308",
        latitude: "77.55110555831425",
        isFavorite: true,
    },
    {
        id: "40",
        name: "Rajajinagar Metro",
        address: "Chord Road West of Chord Road 2nd Stage Nagapura Bengaluru, Arisinakunte, Karnataka 560086",
        cost: [{ id: 1, cost: "10", interval: "Hour" }, { id: 2, cost: "250", interval: "Day" }],
        contact: "8726514526",
        spotsTotalCount: 50,
        spotsAvailableCount: 15,
        spotsConsumedCount: 35,
        extraNotes: "Avaliable 24/7",
        longitute: "12.99818769062871",
        latitude: "77.55050673365037",
        isFavorite: false,
    },
    {
        id: "50",
        name: "District 6 - Pub and Brewery",
        address: "G-03, G-04, G-05 26/1, Dr Rajkumar Road, Malleshwaram, Rajajinagar, Bengaluru, Karnataka 560055",
        cost: [{ id: 1, cost: "25", interval: "Hour" }, { id: 2, cost: "400", interval: "Day" }],
        contact: "9018527719",
        spotsTotalCount: 100,
        spotsAvailableCount: 80,
        spotsConsumedCount: 20,
        extraNotes: "Overnight parking available",
        longitute: "13.012659604045066",
        latitude: "77.55474603893751",
        isFavorite: true,
    },
    {
        id: "60",
        name: "Old Big Bazar",
        address: "5&6, Chord Rd, near Iskon Temple, Yeshwanthpur Industrial Suburb, Rajajinagar, Bengaluru, Karnataka 560086",
        cost: [{ id: 1, cost: "30", interval: "Hour" }, { id: 2, cost: "70", interval: "3 Hour" }, { id: 3, cost: "100", interval: "5 Hour" }],
        contact: "6725416728",
        spotsTotalCount: 200,
        spotsAvailableCount: 198,
        spotsConsumedCount: 2,
        extraNotes: "Parking for customers only",
        longitute: "13.010512299933627",
        latitude: "77.55477525886097",
        isFavorite: false,
    },
    {
        id: "70",
        name: "Phoenix One Bangalore West",
        address: "1, Dr Rajkumar Rd, opp. Vivekananda College, Rajajinagar, Bengaluru, Karnataka 560010",
        cost: [{ id: 1, cost: "20", interval: "Hour" }, { id: 2, cost: "480", interval: "Day" }],
        contact: "080-24518798",
        spotsTotalCount: 500,
        spotsAvailableCount: 100,
        spotsConsumedCount: 400,
        extraNotes: "For guests only",
        longitute: "13.009832485616164",
        latitude: "77.55348486962289",
        isFavorite: false,
    },
    {
        id: "80",
        name: "Sheraton Grand Hotel",
        address: "26/1 Dr. Rajkumar Road Malleswaram, Rajajinagar, Bengaluru, Karnataka 560055",
        cost: [{ id: 1, cost: "100", interval: "Day" }],
        contact: "9827651511",
        spotsTotalCount: 500,
        spotsAvailableCount: 150,
        spotsConsumedCount: 350,
        extraNotes: "Overnight parking available",
        longitute: "13.021089615031311",
        latitude: "77.55297575884843",
        isFavorite: false,
    },
    {
        id: "90",
        name: "Balaji Residency",
        address: "15th Cross, 8th Main, Rajajinagar, 1st Block, Bangalore, Karnataka 5600055",
        cost: [{ id: 1, cost: "10", interval: "Hour" }, { id: 2, cost: "40", interval: "5 Hour" }, { id: 3, cost: "150", interval: "Day" }, { id: 4, cost: "800", interval: "Week" }, { id: 5, cost: "3500", interval: "Month" }],
        contact: "9876543210",
        spotsTotalCount: 3,
        spotsAvailableCount: 2,
        spotsConsumedCount: 1,
        extraNotes: "Open space for parking",
        longitute: "13.021089615268311",
        latitude: "77.552975758864843",
        isFavorite: false,
    },
    {
        id: "100",
        name: "18th Cross Road",
        address: "18th cross road, Matha Medicals Building, Rajajinagar, Bangalore, Karnataka 5600055",
        cost: [{ id: 1, cost: "10", interval: "Hour" }, { id: 2, cost: "240", interval: "Day" }, { id: 3, cost: "950", interval: "Week" }],
        contact: "6257192873",
        spotsTotalCount: 1,
        spotsAvailableCount: 1,
        spotsConsumedCount: 0,
        extraNotes: "Garage Parking for maximum one week",
        longitute: "13.021089615268311",
        latitude: "77.552975758864843",
        isFavorite: true,
    },
];

export default spotsList;