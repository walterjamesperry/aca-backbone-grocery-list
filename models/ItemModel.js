const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const itemSchema = new Schema({
    name: String,
    quantity: String,
    activated: {
        type: Boolean,
        default: true
    }
});

module.exports = mongoose.model('Item', itemSchema);
