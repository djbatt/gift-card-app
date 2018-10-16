const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sourceSchema = new Schema({
    sourceFirst: {type: String, required: true},
    sourceLast: {type: String, required: true},
    sourcePhone: {type: Number, required: true},
    sourceEmail: {type: String, required: true},
    gifts: [{type: Schema.Types.ObjectId, ref: 'Gift'}]
}, {
    timestamps: true
});

const Source = mongoose.model("Source", sourceSchema);

module.exports = Source;