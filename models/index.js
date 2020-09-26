const mongoose = require('mongoose');
const Schema = mongoose.Schema;

newSchema = new Schema({
    name: String,
    email: String,
    college: String,
    branch: String,
    cgpa: String,
    batch: Number
})

module.exports = mongoose.model('User', newSchema)