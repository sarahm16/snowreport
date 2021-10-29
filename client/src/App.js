import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import html from './html';
import html2 from './html2';

import getPdf from './utils/getPdf';
import savePdf from './utils/savePdf';
import Landing from './pages/landing';
import axios from 'axios';

const schedule = require('node-schedule');

function App() {
  useEffect(() => {

    console.log('useeffect')
    const getAndSavePdf = async (htmlData, version) => {
      const pdfData = await getPdf(htmlData)
      console.log(pdfData)
      savePdf(pdfData, version)
    } 

    //RUN CODE TO CREATE TWO INITIAL PDFS
    getAndSavePdf(html, 'A')
    getAndSavePdf(html2, 'B')

    //SCHEDULE PDF GENERATION EVERY 6 HOURS AFTER INITIAL GENERATION
    const job = schedule.scheduleJob('0 */6 * * *', function() {
      console.log('Testing node schedule after work, last time event occured: ' + new Date())
        getAndSavePdf(html, 'A')
        getAndSavePdf(html2, 'B')
    })
  }, [])

  return (
    <Landing />
);
}

export default App;
