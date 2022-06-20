const express = require("express");
const computerRouter = express.Router();
const Computer = require("../model/Computer.Schema");
const { getAllComputers, addComputer, updateComputerLocation } = require("../model/Computer.model");

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
    const quantity = req.body.quantity;

    const result = {};
    for (let i = 0; i < quantity; i++) {
     result[`computer${i + 1}`] = await addComputer(newComputer);
    }
    
    res.status(201).send(result);
});

computerRouter.put("/location", async (req, res) => {
    const {employee, location} = req.body;
    const result = updateComputerLocation({employee, location});

    res.status(200).send(result);
});

module.exports = computerRouter;