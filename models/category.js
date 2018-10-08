const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const categorySchema = new Schema({
    category: {type: String, required: true},
    dateCreated: {type: Date, default: Date.now, required: true},
    business: {type: Schema.Types.ObjectId, ref: 'Business'},
    service: [{type: Schema.Types.ObjectId, ref: 'Service'}]
});

const Category = mongoose.model("Category", categorySchema);

module.exports = Category;