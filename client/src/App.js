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

    //savePdf()
    
    console.log('use effect')
    const getAndSavePdf = async (htmlData, version) => {
        const pdfData = await getPdf(htmlData)
        console.log(pdfData)
        savePdf(pdfData, version)
    } 
    //getAndSavePdf()

    getAndSavePdf(html, 'A')
    getAndSavePdf(html2, 'B')

    const job = schedule.scheduleJob('*/10 * * * *', function(){
      console.log('Generating PDF');
      getAndSavePdf(html)
    });
  }, [])

  return (
    <Landing />
);
}

export default App;
