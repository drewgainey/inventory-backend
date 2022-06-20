const { HeadsetSchema } = require("./Headset.Schema");

const getAllHeadsets = () => {
    return new Promise((resolve, reject) => {
        try {
            HeadsetSchema.find({})
            .populate('employee')
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

const updateHeadsetLocation = ({employee, location}) => {
    return new Promise((resolve, reject) => {
        try {
            HeadsetSchema.findOneAndUpdate({employee: employee}, {location: location})
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch(error) {
            retjec(error);
        }
    });
}

module.exports = {
    getAllHeadsets,
    addHeadset,
    updateHeadsetLocation
}