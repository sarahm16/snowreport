import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import '@pnp/sp/presets/all'
import {sp} from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/folders";

import html from './html';

import Landing from './pages/landing';
import axios from 'axios';

var toArrayBuffer = require('to-array-buffer')

//const Anvil = require('@anvilco/anvil')

class App extends Component {

  constructor(props) {
    super(props);
    sp.setup({
      sp: {
        headers: {
          "Accept": "application/json;odata=verbose"
        },
        baseUrl: 'http://localhost:3000/',
      },
    });
  }

  async getCurrentUser() {

    var data = JSON.stringify({
      data: {
          html
      },
    })

    //console.log(data)

    const encodedToken = Buffer.from('U1ZNRSCr9DfneN4UKlWidhmLEyzXga49:', 'ascii').toString('base64')

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

      // axios(config)
      // .then(function (response) {
      //   console.log(response.data)
      //   // //console.log(JSON.stringify(response.data));
      //   // const blob = new Blob([response.data], { type: 'application/pdf' });
      //   // const url = URL.createObjectURL(blob);
      //   // window.open(url, '_blank');

      //   axios.post("Transblue/salestoops/_api/web/GetFolderByServerRelativeUrl('/Transblue/salestoops/Contracts/Snow Reports')/Files/add(url='output3.pdf',overwrite=true)", response.data, {
      //     headers: {
      //       "accept": "application/json;odata=verbose"
      //     },
      //   })
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
 };

  componentDidMount() {
    this.getCurrentUser()
  }

  render() {
    return (
      <Landing />
  );
  }
}

export default App;
