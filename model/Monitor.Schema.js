const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MonitorSchema = new Schema({
    site: String,
    location: String,
    style: String,
    employee: {type: mongoose.Schema.Types.ObjectId,ref:'Employee'}
});

module.exports = {
    MonitorSchema: mongoose.model('Monitor', MonitorSchema),
};