import React, {useState} from 'react';
import axios from 'axios';

import zipcodes from 'zipcodes';

import path from 'path'

import htmlDb from '../html';

function Landing() {
    const [zipcode, setZipcode] = useState('')

    //console.log(Array.isArray(zips))

    function addLocation() {
        //console.log(zipcode)

        // for(let i=12; i<20; i++) {
        //     console.log(i)
        //     let location = zipcodes.lookup(zips[i])
        //     let locationData = {
        //         name: `${location.state} ${location.city}`,
        //         zipcode: location.zip,
        //         latlong: [location.latitude, location.longitude]
        //     }
        //     console.log(locationData)

        //     axios.post('/api/locations/add', locationData)
        // }

        // zips.forEach(zip => {
        //     console.log(zip)
        //     let location = zipcodes.lookup(zip)
        //     let locationData = {
        //         name: `${location.state} ${location.city}`,
        //         zipcode: location.zip,
        //         latlong: [location.latitude, location.longitude]
        //     }
        //     console.log(location)
        //     //axios.post('/api/locations/add', locationData)
        // })
        //console.log(location)
    }

    async function generateReport() {
        let body = ''

        axios.get('/api/pdf/create', {test: 'blah'})

        // axios.get('/api/locations/get')
        //     .then(res => {
        //         //console.log(res)
        //         res.data.forEach(location => {
        //             body = body.concat(`${location.name}    `).concat(`${location.zipcode     }`).concat(`<img src="https://forecast.weather.gov/meteograms/Plotter.php?lat=${location.latlong[0]}&lon=${location.latlong[1]}&wfo=OTX&zcode=WAZ036&gset=18&gdiff=8&unit=0&tinfo=PY8&ahour=0&pcmd=11011111111110000000000000000000000000000000000000000000000&lg=en&indu=1!1!1!&dd=&bw=&hrspan=48&pqpfhr=6&psnwhr=6" />`)
        //             .concat('<br /><hr />')
        //         })

        //         //const encodedToken = Buffer.from(`${process.env.REACT_APP_ANVIL_KEY}:`, 'ascii').toString('base64')


        //         const html = htmlDb

        //         var test = {
        //             data: {
        //                 html
        //             },
        //           }

        //         axios.post('/api/locations/generate', {x: test})

        //     })
    }

    return(
        <div>
            <input onChange={(e) => setZipcode(e.target.value)} value={zipcode}></input>
            {/* <button onClick={generateReport}>GENERATE REPORT</button> */}
            <button onClick={addLocation}>ADD LOCATION</button>
            <button onClick={generateReport}>GENERATE HTML</button>
        </div>
    )
}

export default Landing;