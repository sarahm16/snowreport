import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import html from './html';
import html2 from './html2';

import getPdf from './utils/getPdf';
import savePdf from './utils/savePdf';
import Landing from './pages/landing';
import axios from 'axios';
import getCentralTime from './utils/centralTimeZone';

const schedule = require('node-schedule');

function App() {

  const [num, setNum] = useState(0)

  // function click() {
  //   getPdf(html).then(res => savePdf(res.data, 'A'))
  // }

  useEffect(() => {
    console.log('useeffect')
    const getAndSavePdf = async (htmlData, version) => {
      const pdfData = await getPdf(htmlData)
      console.log(pdfData)
      savePdf(pdfData, version)
    }

   //getCentralTime()

    // getPdf(html).then(res => savePdf(res.data, 'A'))
    // getPdf(html2).then(res => savePdf(res.data, 'B'))

    //SCHEDULE PDF GENERATION EVERY 10 MINUTES AFTER INITIAL GENERATION
    const job = schedule.scheduleJob('*/30 * * * *', function() {
      console.log('Generating Pdf, last time event occured: ' + new Date())
      getPdf(html).then(res => savePdf(res.data, 'A'))
      getPdf(html2).then(res => savePdf(res.data, 'B'))
    })
  }, [])

  return (
    <button onClick={() => getPdf(html)}>TEST</button>
    //<Landing />
);
}

export default App;
