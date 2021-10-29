import axios from 'axios';

function getPdf(html) {
    console.log('generating pdf')
    var data = JSON.stringify({
        data: {
            html
        }
    })

    const encodedToken = Buffer.from(`${process.env.REACT_APP_ANVIL_KEY}:`, 'ascii').toString('base64')
    // var config = {
    //       method: 'post',
    //       url: 'https://my-tb-cors.herokuapp.com/https://app.useanvil.com/api/v1/generate-pdf',
    //       headers: {
    //           Authorization: `Basic ${encodedToken}`,
    //           'Content-Type': 'application/json'
    //         },
    //       data: data,
    //       responseType: 'arraybuffer'
    //   };

      return axios.post('/api/v1/generate-pdf', data, {
        headers: {
            Authorization: `Basic ${encodedToken}`,
            'Content-Type': 'application/json'
            // "X-Requested-With": "XMLHttpRequest"
          },
          responseType: 'arraybuffer'
      })
      .catch(err => console.log(err))
}

export default getPdf