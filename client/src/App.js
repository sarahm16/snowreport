import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import '@pnp/sp/presets/all'
import {sp} from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/folders";

import html from './html';
import html2 from './html2';

import getCentralTime from './utils/centralTimeZone';

import Landing from './pages/landing';
import axios from 'axios';

var toArrayBuffer = require('to-array-buffer')

const schedule = require('node-schedule');


// const job = schedule.scheduleJob('* * * * *', function(){
//   console.log('The answer to life, the universe, and everything!');
// });

//const Anvil = require('@anvilco/anvil')

//CHANGE TO FUNCTIONAL COMPONENT?!

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

      //GETS DATE AND TIME IN CENTRAL TIME ZONE
      let centralTime = getCentralTime()

      axios(config)
      .then(function (response) {
        console.log(response.data)
        axios.post(`Transblue/salestoops/_api/web/GetFolderByServerRelativeUrl('/Transblue/salestoops/Contracts/Snow Reports')/Files/add(url='${centralTime} A.pdf',overwrite=true)`, response.data, {
          headers: {
            "accept": "application/json;odata=verbose"
          },
        })
      })
      .catch(function (error) {
        console.log(error);
      });
 };

  componentDidMount() {
      // axios.get('https://my-tb-cors.herokuapp.com/https://login.microsoftonline.com/seattlemaintenancesolutions-my/oauth2/v2.0/authorize?', {
      //   client_id: 'c52c168d-de54-4e14-827f-317244221002'
      // }).then(res => console.log(res))

    this.getCurrentUser()
  }

  render() {
    return (
      <Landing />
  );
  }
}

export default App;
