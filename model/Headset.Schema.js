const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const HeadsetSchema = new Schema({
    site: String,
    location: String,
    style: String,
    employee: {type: mongoose.Schema.Types.ObjectId,ref:'Employee'}
});

module.exports = {
    HeadsetSchema: mongoose.model('Headset', HeadsetSchema),
};