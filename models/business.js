const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    businessName: {type: String, required: true},
    streetAddress: {type: String, required: true},
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    eMail: {type: String, required: true},
    businessPhone: {type: Number, required: true},
    cellPhone: {type: Number, required: true},
    dateCreated: {type: Date, default: Date.now, required: true},
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;