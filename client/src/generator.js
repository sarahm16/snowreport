import React, { useEffect } from 'react';
import getPdf from './utils/getPdf';
import savePdf from './utils/savePdf';
import html from './html';
import html2 from './html2';

function Generator(props) {

    useEffect(() => {
        console.log(props.id)
        console.log('mounting')

        getPdf(html2).then(res => savePdf(res.data, 'B'))
        //getPdf(html).then(response => savePdf(response.data, 'A'))

    }, [props.id])

    return(
        <div></div>
    )
}

export default Generator