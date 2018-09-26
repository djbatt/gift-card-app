const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    name: {type: String, required: true, index: { unique: true }},
    dateCreated: {type: Date, default: Date.now, required: true, index: { unique: true }},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;