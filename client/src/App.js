import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';
import html from './html';
import html2 from './html2';

import getPdf from './utils/getPdf';
import savePdf from './utils/savePdf';
import Landing from './pages/landing';

const schedule = require('node-schedule');

// const job = schedule.scheduleJob('* * * * *', function(){
//   console.log('The answer to life, the universe, and everything!');
// });

function App() {
  useEffect(() => {
    console.log('use effect')
    // getPdf(html)
    //   .then(res => {
    //     console.log(res.data)
    //     savePdf(res.data)
    //   })

    const getAndSavePdf = async () => {
        const pdfData = await getPdf(html)
        console.log(pdfData)
    } 
    getAndSavePdf()

  }, [])

  return (
    <Landing />
);
}

export default App;
