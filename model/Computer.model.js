const { ComputerSchema } = require("./Computer.Schema");

const getAllComputers = () => {
    return new Promise((resolve, reject) => {
        try {
            ComputerSchema.find({})
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch(error) {
            reject(error);
        }
    });
};
const addComputer = (ComputerObject) => {
    return new Promise((resolve, reject) => {
        try {
            ComputerSchema(ComputerObject)
            .save()
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    getAllComputers,
    addComputer
}