import './App.css';
import { useEffect } from 'react';
import html from './html';
import html2 from './html2';
import html3 from './html3';
import getPdf from './utils/getPdf';
import savePdf from './utils/savePdf';

const schedule = require('node-schedule');

function App() {
  useEffect(() => {     
    console.log('useeffect')

    // getPdf(html3)
    //   .then(res => console.log(res))

    // getPdf(html).then(res => savePdf(res.data, 'A'))
    //   .then(() => getPdf(html2).then(res => savePdf(res.data, 'B')))


    //SCHEDULE PDF GENERATION EVERY 10 MINUTES AFTER INITIAL GENERATION
    const job = schedule.scheduleJob('1 */1 * * *', function() {
      console.log('Generating A Pdf, last time event occured: ' + new Date())
      getPdf(html).then(res => {
        //console.log(res.data)
        savePdf(res.data, 'A')
      })
    })

    const job2 = schedule.scheduleJob('5 */1 * * *', function() {
      console.log('Generating B pdf')
        getPdf(html2).then(res => savePdf(res.data, 'B'))
    })

    // const job3 = schedule.scheduleJob('8 * * * *', function() {
    //   getPdf(html3).then(res => savePdf(res.data, 'C'))
    // })
  }, [])

  return (
    <div></div>
    //<Landing />
);
}

export default App;
