const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const EmployeeSchema = new Schema({
    employeeName: String,
    site: String,
    location: String,
    Active: {type: Boolean, default: true},
});

module.exports = {
    EmployeeSchema: mongoose.model('Employee', EmployeeSchema),
}