function getCentralTime() {
    let d = new Date();

    let localTime = d.getTime();

    let localOffset = d.getTimezoneOffset() * 60000;

    let utc = localTime + localOffset;

    let offset = -5 ///UTC OFFSET FOR CENTRAL TIME ZONE

    let central = utc + (3600000*offset);

    let nd = new Date(central)

    let month = nd.getMonth() + 1
    let day = nd.getDate()
    let year = nd.getFullYear()
    let hours = nd.getHours()

    let minutes = nd.getMinutes()
    if(minutes.toString().length === 1) minutes = '0' + minutes.toString()

    return `${month}-${day}-${year} ${hours}${minutes}`
}

export default getCentralTime;