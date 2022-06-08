const { HeadsetSchema } = require("./Headset.Schema");

const getAllHeadsets = () => {
    return new Promise((resolve, reject) => {
        try {
            HeadsetSchema.find({})
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch(error) {
            reject(error);
        }
    });
};
const addHeadset = (HeadsetObject) => {
    return new Promise((resolve, reject) => {
        try {
            HeadsetSchema(HeadsetObject)
            .save()
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    getAllHeadsets,
    addHeadset
}