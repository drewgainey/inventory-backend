const { MouseSchema } = require("./Mouse.Schema");

const getAllMouses = () => {
    return new Promise((resolve, reject) => {
        try {
            MouseSchema.find({})
            .populate('employee')
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch(error) {
            reject(error);
        }
    });
};
const addMouse = (MouseObject) => {
    return new Promise((resolve, reject) => {
        try {
            MouseSchema(MouseObject)
            .save()
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch (error) {
            reject(error);
        }
    });
}
const updateMouseLocation = ({employee, location}) => {
    return new Promise((resolve, reject) => {
        try {
            MouseSchema.findOneAndUpdate({employee: employee}, {location: location})
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch(error) {
            retjec(error);
        }
    });
}
module.exports = {
    getAllMouses,
    addMouse,
    updateMouseLocation
}