import logo from './logo.svg';
import './App.css';
import { Component, useEffect } from 'react';
import '@pnp/sp/presets/all'
import {sp} from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/folders";

import html from './html';
import html2 from './html2';

import getPdf from './utils/getPdf';
import savePdf
 from './utils/savePdf';
import Landing from './pages/landing';

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
      .then(res => {
        console.log(res.data)
        savePdf(res.data)
      })
  }, [])

  return (
    <Landing />
);
}

export default App;
