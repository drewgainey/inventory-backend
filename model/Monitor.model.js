const { MonitorSchema } = require("./Monitor.Schema");

const getAllMonitors = () => {
    return new Promise((resolve, reject) => {
        try {
            MonitorSchema.find({})
            .populate('employee')
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
//this might not work since employees can have more than one monitor. Is there a find all method? I can include the location as a filter as well
const updateMonitorLocation = ({employee, location}) => {
    return new Promise((resolve, reject) => {
        try {
            MonitorSchema.findOneAndUpdate({employee: employee}, {location: location})
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch(error) {
            retjec(error);
        }
    });
}
module.exports = {
    getAllMonitors,
    addMonitor,
    updateMonitorLocation
}