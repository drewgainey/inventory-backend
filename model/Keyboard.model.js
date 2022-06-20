const { KeyboardSchema } = require("./Keyboard.Schema");

const getAllKeyboards = () => {
    return new Promise((resolve, reject) => {
        try {
            KeyboardSchema.find({})
            .populate('employee')
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch(error) {
            reject(error);
        }
    });
};
const addKeyboard = (KeyboardObject) => {
    return new Promise((resolve, reject) => {
        try {
            KeyboardSchema(KeyboardObject)
            .save()
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch (error) {
            reject(error);
        }
    });
}
const updateKeyboardLocation = ({employee, location}) => {
    return new Promise((resolve, reject) => {
        try {
            KeyboardSchema.findOneAndUpdate({employee: employee}, {location: location})
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch(error) {
            retjec(error);
        }
    });
}
module.exports = {
    getAllKeyboards,
    addKeyboard,
    updateKeyboardLocation
}