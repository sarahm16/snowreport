const Location = require('../../models/Location')
const express = require("express");
const router = express.Router();

const fs = require('fs');

router.post('/add', (req, res) => {
    console.log(req.body)
    Location.create(req.body)
})

router.get('/get', (req,res) => {
    //console.log(res)

    // fs.readFile('../../locations.json', function(err, data) {
    //     console.log(data)
    //     res.json(data)
    // })

    Location.find()
        .then(locations => res.json(locations) )

})

router.post('/generate', (req, res) => {
    let { header, body, footer } = req.body
    const html = `${header} ${body} ${footer}`
    fs.writeFile('test.html', html, function(err, data) {
        if (err)
        console.log(err);
      else {
        console.log("File written successfully\n");
        // console.log("The written has the following contents:");
        // console.log(fs.readFileSync("test.html", "utf8"));
      }
    })
})

module.exports = router;