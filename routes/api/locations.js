const Location = require('../../models/Location')
const express = require("express");
const router = express.Router();
var fs = require('fs')

router.get('/get', (req,res) => {
    //console.log(res)

    // fs.readFile('../../locations.json', function(err, data) {
    //     console.log(data)
    //     res.json(data)
    // })

    Location.find()
        .then(res => console.log(res))

})

module.exports = router;