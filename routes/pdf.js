const express = require('express')
const router = express.Router()
const Anvil = require('@anvilco/anvil')
const fs = require('fs')
const axios = require('axios');

const apiKey = 'A92z6RXbVAHdJ62X8vcVKRxnYdEUpIeE'


router.post('/get', (req, res) => {
    console.log('pdf endpoint')

    const exampleData = {
        type: 'html',
        data: {
            html: req.body.html
        },
        page: {
            width: '900px',
            height: '1200px'
        }
    }

    const options = {
        headers: {
            'Content-Type': 'application/json'
            },
        responseType: 'arraybuffer'
        }

    async function getPdfData() {
        const anvilClient = new Anvil({ apiKey })
        const { statusCode, data } = await anvilClient.generatePDF(exampleData, options)
        console.log(data)
        console.log(statusCode)
        res.json(data)
    }

    getPdfData()
})

module.exports = router;