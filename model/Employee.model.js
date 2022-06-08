const { EmployeeSchema } = require("./Employee.Schema");

const getAllEmployees = () => {
    return new Promise((resolve, reject) => {
        try {
            EmployeeSchema.find({})
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch(error) {
            reject(error);
        }
    });
};
const addEmployee = (employeeObject) => {
    return new Promise((resolve, reject) => {
        try {
            EmployeeSchema(employeeObject)
            .save()
            .then((data) => resolve(data))
            .catch((error) => reject(error));
        } catch (error) {
            reject(error);
        }
    });
}

module.exports = {
    getAllEmployees,
    addEmployee
}