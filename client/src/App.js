import './App.css';
import { useEffect, useState } from 'react';
import html from './html';
import html2 from './html2';
import html3 from './html3';
import getPdf from './utils/getPdf';
import savePdf from './utils/savePdf';
import axios from 'axios';

const schedule = require('node-schedule');

function App() {
  const [index, setIndex] = useState(0)

  const job4 = schedule.scheduleJob('*/15 * * * *', function() {
    setIndex(index + 1)
  })

  useEffect(() => {
    console.log('useeffect')
    console.log(index)

    axios.post('/pdf/get', {html: html})
      .then(res => {

        var arrayBuffer = new Uint8Array(res.data.data).buffer
        //console.log(ab)
        savePdf(arrayBuffer, 'A')
      })

      axios.post('/pdf/get', {html: html2})
      .then(res => {

        var arrayBuffer = new Uint8Array(res.data.data).buffer
        //console.log(ab)
        savePdf(arrayBuffer, 'B')
      })

      axios.post('/pdf/get', {html: html3})
      .then(res => {

        var arrayBuffer = new Uint8Array(res.data.data).buffer
        //console.log(ab)
        savePdf(arrayBuffer, 'C')
      })

    //SCHEDULE PDF GENERATION EVERY 10 MINUTES AFTER INITIAL GENERATION
    // const job = schedule.scheduleJob('13 */1 * * *', function() {
    //   console.log('Generating A Pdf, last time event occured: ' + new Date())
    //   // getPdf(html).then(res => {
    //   //   //console.log(res.data)
    //   //   savePdf(res.data, 'A')
    //   // })
    //   axios.post('/pdf/get', {html: html})
    //   .then(res => {

    //     var arrayBuffer = new Uint8Array(res.data.data).buffer
    //     //console.log(ab)
    //     savePdf(arrayBuffer, 'A')
    //   })
    // })

    // const job2 = schedule.scheduleJob('15 */1 * * *', function() {
    //   axios.post('/pdf/get', {html: html2})
    //   .then(res => {

    //     var arrayBuffer = new Uint8Array(res.data.data).buffer
    //     //console.log(ab)
    //     savePdf(arrayBuffer, 'B')
    //   })
    // })

    // const job3 = schedule.scheduleJob('17 */1 * * *', function() {
    //   axios.post('/pdf/get', {html: html3})
    //   .then(res => {
    //     var arrayBuffer = new Uint8Array(res.data.data).buffer
    //     //console.log(ab)
    //     savePdf(arrayBuffer, 'C')
    //   })
    // })

  }, [index])

  return (
    <div></div>
    //<Landing />
);
}

export default App;
