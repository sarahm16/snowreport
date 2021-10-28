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

    let data = JSON.stringify({  
      'properties': {'__metadata': { 'type': 'SP.Utilities.EmailProperties' },  
      'From': 'no-reply@transblue.org',  
      'To': { 'results': ['carters@transblue.org', 'wescottj@transblue.org'] },  
      'Body': 'testing no reply sender',  
      'Subject': 'Snow Report Error - Saving PDF to Sharepoint' }
  })      
    axios.post('/_api/SP.Utilities.Utility.SendEmail', data, {
      headers: {
        "accept": "application/json;odata=verbose",
        "Content-Type": "application/json;odata=verbose"
      }
    })
    
    // console.log('use effect')
    // const getAndSavePdf = async (htmlData, version) => {
    //     const pdfData = await getPdf(htmlData)
    //     console.log(pdfData)
    //     savePdf(pdfData, version)
    // } 
    // //getAndSavePdf()

    // getAndSavePdf(html, 'A')
    // getAndSavePdf(html2, 'B')

    // const job = schedule.scheduleJob('*/10 * * * *', function(){
    //   console.log('Generating PDF');
    //   getAndSavePdf(html)
    // });
  }, [])

  return (
    <Landing />
);
}

export default App;
