import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import '@pnp/sp/presets/all'
import {sp} from "@pnp/sp";
import "@pnp/sp/webs";
import "@pnp/sp/folders";

import html from './html';

import Landing from './pages/landing';
import axios from 'axios';

var toArrayBuffer = require('to-array-buffer')

//const Anvil = require('@anvilco/anvil')

class App extends Component {

  constructor(props) {
    super(props);
    sp.setup({
      sp: {
        headers: {
          "Accept": "application/json;odata=verbose"
        },
        baseUrl: 'http://localhost:3000/',
      },
    });
  }

  async getCurrentUser() {

    var data = '{\n    "title": "Anvil Doghouse Project Invoice",\n    "logo": {\n        "src": "https://raw.githubusercontent.com/anvilco/public-assets/master/twitter.png",\n        "maxWidth": 120,\n        "maxHeight": 120\n    },\n    "fontSize": 18,\n    "textColor": "#171717",\n    "includeTimestamp": true,\n    "data": [\n        {\n            "content": "March 4th, 2024",\n            "fontSize": 16,\n            "textColor": "#616161"\n        },\n        {\n            "label": "To",\n            "content": "Phoebe Beckett - phoebe@example.com",\n            "fontSize": 12,\n            "textColor": "#006ec2"\n        },\n        {\n            "label": "From",\n            "content": "Anvil Inc. - hello@useanvil.com",\n            "fontSize": 12,\n            "textColor": "#006ec2"\n        },\n        {\n            "label": "Building material expenses",\n            "table": {\n                "rows": [\n                    ["Description", "Quantity", "Price"],\n                    ["3x Roof Shingles", "15", "$60.00"],\n                    ["5x Hardwood Plywood", "10", "$300.00"],\n                    ["80x Wood Screws", "80", "$45.00"],\n                    [\n                        "3x Ombre Swirl deluxe dog bed for medium dog breeds between 26 to 40 pounds. With ultra-soft synthetic fur and overstuffed dog bed with non-slide grip that pairs well with hardwood or tiled floors. Easily maintainble, easy to clean, and perfect for any home environment. Lasts over 5 years with 1 year warranty included.",\n                        "3",\n                        "$190.00"\n                    ]\n                ],\n                "columnOptions": [\n                    { "align": "left", "width": "60%" },\n                    { "align": "center" , "width": "100px" },\n                    { "align": "right" }\n                ],\n                "verticalAlign": "top",\n                "firstRowHeaders": true,\n                "rowGridlines": true,\n                "columnGridlines": true\n            },\n            "fontSize": 10\n        },\n        {\n            "label": "Food expenses",\n            "table": {\n                "rows": [\n                    ["Description", "Quantity", "Price"],\n                    ["20x Dog Biscuits", "20", "$50.00"],\n                    ["10x Air-dried Dog Food. Gently dehydrated to preserve nutrients and flavor while killing germs. No fridge or prep required. Simply pour into bowl.", "10", "$75.00"]\n                ],\n                "columnOptions": [\n                    { "align": "left", "width": "40%" },\n                    { "align": "left" },\n                    { "align": "left", "width": "200px" }\n                ],\n                "verticalAlign": "center",\n                "firstRowHeaders": true,\n                "rowGridlines": false,\n                "columnGridlines": true\n            },\n            "fontSize": 10\n        },\n        {\n            "label": "Total Amount",\n            "table": {\n                "rows": [\n                    ["**Tax**", "$64.80"],\n                    ["***Total***", "$784.80"]\n                ],\n                "firstRowHeaders": false\n            },\n            "fontSize": 14,\n            "textColor": "#db0000"\n        }\n    ]\n}';



    const encodedToken = Buffer.from('U1ZNRSCr9DfneN4UKlWidhmLEyzXga49:', 'ascii').toString('base64')

      var config = {
          method: 'post',
          url: 'https://my-tb-cors.herokuapp.com/https://app.useanvil.com/api/v1/generate-pdf',
          headers: {
              Authorization: `Basic ${encodedToken}`,
              'Content-Type': 'application/json'
            },
          data: data,
          responseType: 'arraybuffer'
      };

      axios(config)
      .then(function (response) {
        console.log(response.data)
        // //console.log(JSON.stringify(response.data));
        // const blob = new Blob([response.data], { type: 'application/pdf' });
        // const url = URL.createObjectURL(blob);
        // window.open(url, '_blank');

        axios.post("Transblue/salestoops/_api/web/GetFolderByServerRelativeUrl('/Transblue/salestoops/Contracts/Snow Reports')/Files/add(url='output2.pdf',overwrite=true)", response.data, {
          headers: {
            "accept": "application/json;odata=verbose"
          },
        })
      })
      .catch(function (error) {
        console.log(error);
      });
    
    // axios(config)
    // .then(function (response) {
    //   console.log(response.data)
    //   //console.log(JSON.stringify(response.data));

    //   //console.log(response.data.arrayBuffer())

    //   //var pdf = toArrayBuffer(response.data)

    //   var file = new Blob([response.data], {type: 'application/pdf'});
    //   var fileURL = URL.createObjectURL(file);
    //   window.open(fileURL);

    //   //console.log(pdf)

    //   // axios.post("Transblue/salestoops/_api/web/GetFolderByServerRelativeUrl('/Transblue/salestoops/Contracts/Snow Reports')/Files/add(url='output.pdf',overwrite=true)", response.data, {
    //   //   encoding: null,
    //   //   processData: false,
    //   //   headers: {
    //   //     "accept": "application/json;odata=verbose"
    //   //   },
    //   // })
    // })
    // .catch(function (error) {
    //   console.log(error);
    // });

    // axios.get("Transblue/salestoops/_api/web/GetFolderByServerRelativeUrl('/Transblue/salestoops/Contracts/Snow Reports')/Files")
    //   .then(res => console.log(res))
 };

  componentDidMount() {
      // axios.get('https://my-tb-cors.herokuapp.com/https://login.microsoftonline.com/seattlemaintenancesolutions-my/oauth2/v2.0/authorize?', {
      //   client_id: 'c52c168d-de54-4e14-827f-317244221002'
      // }).then(res => console.log(res))    

    this.getCurrentUser()


  }

  render() {
    return (
      <Landing />
  );
  }
}

export default App;
