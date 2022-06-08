const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const KeyboardSchema = new Schema({
    site: String,
    location: String,
    employee: {type: mongoose.Schema.Types.ObjectId,ref:'Employee'}
});

module.exports = {
    KeyboardSchema: mongoose.model('Keyboard', KeyboardSchema),
};