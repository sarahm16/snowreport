function getCentralTime() {
    let d = new Date();

    let localTime = d.getTime();

    let localOffset = d.getTimezoneOffset() * 60000;

    let utc = localTime + localOffset;

    let offset = -5 ///UTC OFFSET FOR CENTRAL TIME ZONE

    let central = utc + (3600000*offset);

    let nd = new Date(central)

    let month = nd.getMonth()
    let day = nd.getDay()
    let year = nd.getFullYear()
    let hours = nd.getHours()
    let minutes = nd.getMinutes()

    return `${month}-${day}-${year} ${hours}${minutes}`
}

export default getCentralTime;