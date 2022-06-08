const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ComputerSchema = new Schema({
    site: String,
    location: String,
    yearPurchased: Number,
    employee: {type: mongoose.Schema.Types.ObjectId,ref:'Employee'}
});

module.exports = {
    ComputerSchema: mongoose.model('Computer', ComputerSchema),
};