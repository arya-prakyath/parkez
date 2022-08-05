import getFormattedTime from "./timeFormatter";

const getFomattedDateTime = (dateTime: string) => {
    dateTime = dateTime.split("GMT")[0];
    let splittedDateTime = dateTime.split(' ');

    let date = `${splittedDateTime[0]}, ${splittedDateTime[1]} ${splittedDateTime[2]} ${splittedDateTime[3]}`;

    let splittedTime = splittedDateTime[4].split(':');
    let time = getFormattedTime(`${splittedTime[0]} : ${splittedTime[1]}`);

    return `${date},\n${time}`;
}

export default getFomattedDateTime;