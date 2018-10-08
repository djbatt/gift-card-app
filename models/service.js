const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const serviceSchema = new Schema({
    title: {type: String, required: true},
    description: {type: String},
    price: {type: Number, required: true},
    category: {type: Schema.Types.ObjectId, ref: 'Category'},
    business: {type: Schema.Types.ObjectId, ref: 'Business'}
});

const Service = mongoose.model("Service", serviceSchema);

module.exports = Service;