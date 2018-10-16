const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    businessName: {type: String, required: true},
    businessAddress: {type: String, required: true},
    businessPostal: {type: Number, required: true},
    businessCity: {type: String, required: true},
    businessState: {type: String, required: true},
    businessFirst: {type: String, required: true},
    businessLast: {type: String, required: true},
    businessEmail: {type: String, required: true},
    businessWork: {type: Number, required: true},
    businessCell: {type: Number},
    colorOne: {type: String, default: '#f6f6f6'},
    colorTwo: {type: String, default: '#e9e9e9'},
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    gifts: [{type: Schema.Types.ObjectId, ref: 'Gift'}],
    sources: [{type: Schema.Types.ObjectId, ref: 'Source'}],
    categorys: [{type: Schema.Types.ObjectId, ref: 'Category'}]
}, {
    timestamps: true
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;