const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const giftSchema = new Schema({
    dollar: {type: Number},
    recipientEmail: {type: String, required: true},
    recipientName: {type: String, required: true},
    giftTitle: {type: String, required: true},
    giftMessage: {type: String, required: true},
    giftTo: {type: String, required: true},
    giftFrom: {type: String, required: true},
    business: {type: Schema.Types.ObjectId, ref: 'Business'},
    source: {type: Schema.Types.ObjectId, ref: 'Source'}
}, {
    timestamps: true
});

const Gift = mongoose.model("Gift", giftSchema);

module.exports = Gift;