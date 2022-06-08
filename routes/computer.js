const express = require("express");
const computerRouter = express.Router();
const Computer = require("../model/Computer.Schema");
const { getAllComputers, addComputer } = require("../model/Computer.model");

computerRouter.get('/', async (req, res) => {
    const result = await getAllComputers();
    res.status(200).send(result);
});

computerRouter.post('/', async (req, res) => {
    const newComputer = ({
        site,
        location,
        yearPurchased,
        employee
    } = req.body);
    const result = await addComputer(newComputer);
    res.status(201).send(result);
});

module.exports = computerRouter;