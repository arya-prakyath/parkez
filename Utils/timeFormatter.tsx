const getFormattedTime = (time: string | undefined) => {
    if (time) {
        const splittedTime = time.split(':');
        let hour = parseInt(splittedTime[0].trim());
        let min = splittedTime[1].trim();
    
        if (min.length !== 2) {
            min = `0${min}`;
        }
    
        if (hour === 0) {
            hour = 12;
            return `${hour} : ${min} AM`;
        } else if (hour === 12) {
            return `${hour} : ${min} PM`;
        } else if (hour > 12) {
            hour = hour - 12
            return (hour < 10) ? `0${hour} : ${min} PM` : `${hour} : ${min} PM`;
        }
        else {
            return `0${hour} : ${min} AM`;
        }
    }
}

export default getFormattedTime;