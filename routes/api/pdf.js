const express = require("express");
const router = express.Router();

router.get('/create', (req, res) => {
    console.log('create')
})

module.exports = router;