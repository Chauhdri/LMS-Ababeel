import React from "react";




// const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thur", "Fri", "Sat",];
const dayNamesCom = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];
const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
// const monthNamesFull = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
const date = Date.now();

export let dateFormat = (date) => { date = new Date(date); return `${date.getDate()}-${monthNames[date.getMonth(date)]}` }
function day(value) { return (Math.floor((Date.parse(value) - date) / 86.4e+6)) }       // 86.4e+6 are milliseconds for 1 day. and returns upcoming date as object..

function CountDown(props) {
    const diff = props.value - +(new Date())
    let value = () => {
        if (diff > 0)
            return [
                String(Math.floor((diff / (1000 * 60 * 60)) % 24)).padStart(2, '0'),
                String(Math.floor((diff / 1000 / 60) % 60)).padStart(2, '0'),
                String(Math.floor((diff / 1000) % 60)).padStart(2, '0')
            ]
    }

    const [count, setCount] = React.useState(value())
    React.useEffect(() => { setTimeout(() => { setCount(value()); }, 1000); })

    return `${count[0]}:${count[1]}:${count[2]} `;
}


export function nextLectureDate(targetArray, condition) {

    let nextDate = (condition === "Assignments") ? (targetArray.find((a) => { return (Date.parse(a["Last Date"]) > date) })) : (targetArray.find((a) => { return (Date.parse(a.Date + ' ' + a.Time) > date) }));
    nextDate = (nextDate===undefined ? "-" : ((condition === "Assignments") ? nextDate["Last Date"] : (nextDate.Date + ' ' + nextDate.Time)));

    const days = (nextDate) => {
        return <i>{day(nextDate) === 0 ? <CountDown value={new Date(nextDate)} /> : ((day(nextDate) <= 7) ? (dayNamesCom[(new Date(nextDate)).getDay()]) : ((day(nextDate) <= 31) ? (`${(new Date(nextDate)).getDate()}-${monthNames[(new Date(nextDate)).getMonth()]}`) : (((day(nextDate) <= 365) ? (`${monthNames[(new Date(nextDate)).getMonth()]}-${(new Date(nextDate)).getFullYear() - 2000}`) : ((day(nextDate) > 365) ? (new Date(nextDate)).getFullYear() : "---")))))} </i>  } //year minused by 2000 to get last two digits of year, it is valid for limited time 

    return days(nextDate);
}


export function nextLectureDay(value) {
    return day(value) < 0 ? "Past" : (day(value) === 0 ? <CountDown value={new Date(value)} /> : (day(value) === 1 ? "Tommorow" : (dayNamesCom[(new Date(value)).getDay()])))
}
