const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipientSchema = new Schema({
    recipientEmail: {type: String, required: true},
    recipientName: {type: String, required: true},
    title: {type: String, required: true},
    message: {type: String, required: true},
    to: {type: String, required: true},
    from: {type: String, required: true},
    business: {type: Schema.Types.ObjectId, ref: 'Business'},
    source: {type: Schema.Types.ObjectId, ref: 'Source'}
}, {
    timestamps: true
});

const Recipient = mongoose.model("Recipient", recipientSchema);

module.exports = Recipient;