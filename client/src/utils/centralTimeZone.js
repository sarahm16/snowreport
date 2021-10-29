function getCentralTime() {
    let d = new Date();

    let localTime = d.getTime();

    let localOffset = d.getTimezoneOffset() * 60000;

    let utc = localTime + localOffset;

    let offset = -5 ///UTC OFFSET FOR CENTRAL TIME ZONE

    let central = utc + (3600000*offset);

    let nd = new Date(central)

    console.log(nd)

    console.log(nd.toLocaleString())

    let month = nd.getMonth() + 1
    let day = nd.getDate()
    //console.log(day)
    let year = nd.getFullYear()
    let hours = nd.getHours()

    let minutes = nd.getMinutes()
    if(minutes.length === 1) minutes = `0${minutes}`

    //console.log(minutes)

   //console.log(`${month}-${day}-${year} ${minutes}${hours}`)


    return `${month}-${day}-${year} ${hours}${minutes}`
}

export default getCentralTime;