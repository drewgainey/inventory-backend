const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MouseSchema = new Schema({
    site: String,
    location: String,
    employee: {type: mongoose.Schema.Types.ObjectId,ref:'Employee'}
});

module.exports = {
    MouseSchema: mongoose.model('Mouse', MouseSchema),
};