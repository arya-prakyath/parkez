interface costIntervalsType{
    label: string,
    value: string,
}

const costIntervals: costIntervalsType[] = [
    { label: 'Hour', value: '0' },
    { label: '3 Hours', value: '1' },
    { label: '5 Hours', value: '2' },
    { label: '10 Hours', value: '3' },
    { label: '15 Hours', value: '4' },
    { label: 'Day', value: '5' },
    { label: 'Week', value: '6' },
    { label: 'Month', value: '7' },
    { label: 'Year', value: '8' },
];

export default costIntervals;