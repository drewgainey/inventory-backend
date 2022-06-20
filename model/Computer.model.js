const { ComputerSchema } = require("./Computer.Schema");

const getAllComputers = () => {
    return new Promise((resolve, reject) => {
        try {
            ComputerSchema.find({})
            .populate('employee')
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
const updateComputerLocation = ({employee, location}) => {
    return new Promise((resolve, reject) => {
        try {
            ComputerSchema.findOneAndUpdate({employee: employee}, {location: location})
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch(error) {
            retjec(error);
        }
    });
}

module.exports = {
    getAllComputers,
    addComputer,
    updateComputerLocation
}