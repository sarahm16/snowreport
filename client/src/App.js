import logo from './logo.svg';
import './App.css';
import { Component, useEffect } from 'react';
import '@pnp/sp/presets/all'
import {sp} from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/folders";

import html from './html';
import html2 from './html2';

import getCentralTime from './utils/centralTimeZone';

import Landing from './pages/landing';
import axios from 'axios';

import getPdf from './utils/getPdf';

//var toArrayBuffer = require('to-array-buffer')

const schedule = require('node-schedule');

// const job = schedule.scheduleJob('* * * * *', function(){
//   console.log('The answer to life, the universe, and everything!');
// });

//const Anvil = require('@anvilco/anvil')


function App() {
  useEffect(() => {
    console.log('use effect')
    getPdf(html)
      .then(res => console.log(res))
      //GETS DATE AND TIME IN CENTRAL TIME ZONE
      let centralTime = getCentralTime();

      // axios(config)
      // .then(function (response) {
      //   console.log(response.data)
      //   axios.post(`Transblue/salestoops/_api/web/GetFolderByServerRelativeUrl('/Transblue/salestoops/Contracts/Snow Reports')/Files/add(url='${centralTime} A.pdf',overwrite=true)`, response.data, {
      //     headers: {
      //       "accept": "application/json;odata=verbose"
      //     },
      //   })
      // })
      // .catch(function (error) {
      //   console.log(error);
      // });
  }, [])

  return (
    <Landing />
);
}

export default App;
