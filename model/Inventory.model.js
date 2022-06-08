const { InventorySchema } = require("./Inventory.Schema");

const getAllInventory = () => {
  return new Promise((resolve, reject) => {
    try {
      InventorySchema.find({})
        .then((data) => resolve(data))
        .catch((error) => reject(error));
    } catch (error) {
      reject(error);
    }
  });
};

const addInventory = (newInventory) => {
    return new Promise((resolve, reject) => {
        try {
            InventorySchema(newInventory)
            .save()
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch (error) {
            reject(error);
        }
    });
}


module.exports = {getAllInventory, addInventory}