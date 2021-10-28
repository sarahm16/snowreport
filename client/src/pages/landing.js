import React, {useState} from 'react';
import axios from 'axios';

function Landing() {
    const [zipcode, setZipcode] = useState('')

    function addLocation() {
    }

    async function generateReport() {
        let body = ''

        //axios.post('/api/locations/add', {test: 'x'})
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