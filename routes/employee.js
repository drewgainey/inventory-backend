const express = require("express");
const employeeRouter = express.Router();
const Employee = require("../model/Employee.Schema");
const { getAllEmployees, addEmployee } = require("../model/Employee.model");

employeeRouter.get('/', async (req, res) => {
    const result = await getAllEmployees();
    res.status(200).send(result);
});

employeeRouter.post('/', async (req, res) => {
    const newEmployee = ({
        employeeName,
        site,
        location
    } = req.body);
    const result = await addEmployee(newEmployee);
    res.status(201).send(result);
});

module.exports = employeeRouter;