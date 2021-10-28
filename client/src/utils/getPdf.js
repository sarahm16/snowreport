import axios from 'axios';

function getPdf(html) {
    var data = JSON.stringify({
        data: {
            html
        }
    })

    const encodedToken = Buffer.from(`${process.env.REACT_APP_ANVIL_KEY}:`, 'ascii').toString('base64')
    var config = {
          method: 'post',
          url: 'https://my-tb-cors.herokuapp.com/https://app.useanvil.com/api/v1/generate-pdf',
          headers: {
              Authorization: `Basic ${encodedToken}`,
              'Content-Type': 'application/json'
            },
          data: data,
          responseType: 'arraybuffer'
      };

    return axios(config)
      .then(res => {
          return res.data
      })
      .catch(function (error) {
        console.log(error);

        //SEND EMAIL TO ME AND JIM IF GENERATING PDF FAILS
        let data = JSON.stringify({  
            'properties': {'__metadata': { 'type': 'SP.Utilities.EmailProperties' },  
            'From': 'no-reply@transblue.org',  
            'To': { 'results': ['carters@transblue.org', 'wescottj@transblue.org'] },  
            'Body': error,  
            'Subject': 'Snow Report Error - Generating PDF using Anvil' }
        })      
        axios.post('/_api/SP.Utilities.Utility.SendEmail', data, {
          headers: {
            "accept": "application/json;odata=verbose",
            "Content-Type": "application/json;odata=verbose"
          }
        })
      });

}

export default getPdf