const express = require("express");
const monitorRouter = express.Router();
const Monitor = require("../model/Monitor.Schema");
const { getAllMonitors, addMonitor, updateMonitorLocation } = require("../model/Monitor.model");

monitorRouter.get('/', async (req, res) => {
    const result = await getAllMonitors();
    res.status(200).send(result);
});

monitorRouter.post('/', async (req, res) => {
    const newMonitor = ({
        site,
        location,
        style,
        employee
    } = req.body);
    const quantity = req.body.quantity;

    const result = {};
    for (let i = 0; i < quantity; i++) {
     result[`monitor${i + 1}`] = await addMonitor(newMonitor);
    }
    res.status(201).send(result);
});

//right now this just updates the first monitor assigned to an employee
monitorRouter.put("/location", async (req, res) => {
    const {employee, location} = req.body;
    const result = updateMonitorLocation({employee, location});

    res.status(200).send(result);
});


module.exports = monitorRouter;