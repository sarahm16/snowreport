const mongoose = require('mongoose');
//import mongoose, {Schema} from 'mongoose';
const Schema = mongoose.Schema;

const LocationSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    zipcode: {
        type: String,
        required: true
    },
    latlong: {
        type: Array,
        required: true
    }
})

const snowDb = mongoose.connection.useDb('snow')

const Location = snowDb.model('locations', LocationSchema)

module.exports = Location;