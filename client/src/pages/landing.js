import React from 'react';
import axios from 'axios';

function Landing() {
    function generateReport() {
        console.log('generating report')
        axios.get('/api/locations/get')
            .then(res => console.log(JSON.stringify(res)))
    }

    return(
        <div>
            <button onClick={generateReport}>GENERATE REPORT</button>
        </div>
    )
}

export default Landing;