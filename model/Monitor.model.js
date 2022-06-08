const { MonitorSchema } = require("./Monitor.Schema");

const getAllMonitors = () => {
    return new Promise((resolve, reject) => {
        try {
            MonitorSchema.find({})
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch(error) {
            reject(error);
        }
    });
};
const addMonitor = (MonitorObject) => {
    return new Promise((resolve, reject) => {
        try {
            MonitorSchema(MonitorObject)
            .save()
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    getAllMonitors,
    addMonitor
}