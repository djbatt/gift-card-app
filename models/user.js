const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, index: { unique: true }},
    oktaUnique: {type: String, required: true, index: { unique: true }},
    business: [{type: Schema.Types.ObjectId, ref: 'Business'}]
}, {
    timestamps: true
});

const User = mongoose.model("User", userSchema);

module.exports = User;