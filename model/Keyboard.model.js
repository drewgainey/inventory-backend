const { KeyboardSchema } = require("./Keyboard.Schema");

const getAllKeyboards = () => {
    return new Promise((resolve, reject) => {
        try {
            KeyboardSchema.find({})
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

module.exports = {
    getAllKeyboards,
    addKeyboard
}