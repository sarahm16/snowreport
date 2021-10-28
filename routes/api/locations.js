const Location = require('../../models/Location')
const express = require("express");
const router = express.Router();
const Anvil = require('@anvilco/anvil')
const fs = require('fs')
const path = require('path')

//const keys = require('../../config/keys');

//const apiKey = keys.anvilKey;

const axios = require('axios');

router.post('/add', (req, res) => {
    console.log(req.body)
    //Location.create(req.body)
})

router.get('/get', (req,res) => {
    Location.find()
        .then(locations => res.json(locations) )
})

router.get('/generate', (req, res) => {

    // async function main () {
    //   const client = new Anvil({ apiKey })
    //   const exampleData = req.body.x
    //   const { statusCode, data, errors } = await client.generatePDF(exampleData)
    
    //   if (statusCode === 200) {
    //     //fs.writeFileSync('output.pdf', data, { encoding: null })

    //     res.json(data)
    //   } else {
    //     console.log(statusCode, JSON.stringify(errors || data, null, 2))
    //   }
    // }
    
    // main()

})

module.exports = router;