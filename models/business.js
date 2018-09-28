const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    businessName: {type: String, required: true},
    businessAddress: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;