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
      });

}

export default getPdf