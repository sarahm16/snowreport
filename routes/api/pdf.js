const express = require('express')
const router = express.Router()
const Anvil = require('@anvilco/anvil')
const fs = require('fs')
const axios = require('axios');

router.get('/get', (req, res) => {
    console.log('pdf endpoint')
})

module.exports = router;