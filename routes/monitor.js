const express = require("express");
const monitorRouter = express.Router();
const Monitor = require("../model/Monitor.Schema");
const { getAllMonitors, addMonitor } = require("../model/Monitor.model");

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
    const result = await addMonitor(newMonitor);
    res.status(201).send(result);
});

module.exports = monitorRouter;