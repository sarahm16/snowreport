const express = require('express');
const favicon = require('express-favicon');
const path = require('path');
const port = process.env.PORT || 8090;
var compression = require('compression');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const locations = require('./routes/api/locations.js');

const app = express();
app.use(compression());

app.use(express.urlencoded({ 
    extended: false 
}))

app.use(express.json())

mongoose
  .connect(
    process.env.newDB_URI || 
    keys.mongoURI,

    { useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

if(process.env.NODE_ENV === "production")
{
  app.use(express.static('client/build'));
}

app.use('/api/locations', locations)
// /app.use(express.static('client/build'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
});

app.listen(port, () => console.log(`Listening on port ${port}`));