const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const InventorySchema = new Schema({
    itemType: String,
    site: String,
    location: String,
    brand: String,
    yearPurchased: Number
});

module.exports = {
    InventorySchema: mongoose.model('Inventory', InventorySchema),
};