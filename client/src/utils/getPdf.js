import axios from 'axios';

function getPdf(html) {
    console.log('generating pdf')
    var data = JSON.stringify({
        data: {
            html
        },
        page: {
             width: '1000px'
        }
    })

    const encodedToken = Buffer.from(`${process.env.REACT_APP_ANVIL_KEY}:`, 'ascii').toString('base64')
    return axios.post('/api/v1/generate-pdf', data, {
    headers: {
        Authorization: `Basic ${encodedToken}`,
        'Content-Type': 'application/json'
        // "X-Requested-With": "XMLHttpRequest"
        },
        responseType: 'arraybuffer'
    })
      .catch(err => {
        console.log(err)
        //SEND EMAIL TO ME AND JIM IF SAVING PDF FAILS
        let data = JSON.stringify({  
            'properties': {'__metadata': { 'type': 'SP.Utilities.EmailProperties' },  
            'From': 'no-reply@transblue.org',  
            'To': { 'results': ['carters@transblue.org'] },  
            'Body': '',  
            'Subject': 'Snow Report Error - Generating PDF' }
        })      
        axios.post('/_api/SP.Utilities.Utility.SendEmail', data, {
          headers: {
            "accept": "application/json;odata=verbose",
            "Content-Type": "application/json;odata=verbose"
          }
        })
      })
}

export default getPdf