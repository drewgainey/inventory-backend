const { MouseSchema } = require("./Mouse.Schema");

const getAllMouses = () => {
    return new Promise((resolve, reject) => {
        try {
            MouseSchema.find({})
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

module.exports = {
    getAllMouses,
    addMouse
}