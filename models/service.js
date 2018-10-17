const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    serviceCategory: {type: String, required: true},
    serviceName: {type: String, required: true},
    serviceDescription: {type: String},
    servicePrice: {type: Number, required: true},
    business: {type: Schema.Types.ObjectId, ref: 'Business'}
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;