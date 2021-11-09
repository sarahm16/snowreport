import './App.css';
import { useEffect } from 'react';
import html from './html';
import html2 from './html2';
import getPdf from './utils/getPdf';
import savePdf from './utils/savePdf';

const schedule = require('node-schedule');

function App() {
  useEffect(() => {     
    console.log('useeffect')

    // getPdf(html).then(res => savePdf(res.data, 'A'))
    //   .then(() => getPdf(html2).then(res => savePdf(res.data, 'B')))


    //SCHEDULE PDF GENERATION EVERY 10 MINUTES AFTER INITIAL GENERATION
    const job = schedule.scheduleJob('0 */6 * * *', function() {
      console.log('Generating Pdf, last time event occured: ' + new Date())
      getPdf(html).then(res => savePdf(res.data, 'A'))
      .then(() => getPdf(html2).then(res => savePdf(res.data, 'B')))
    })
  }, [])

  return (
    <button>TEST</button>
    //<Landing />
);
}

export default App;
