const express = require("express");
const mouseRouter = express.Router();
const Mouse = require("../model/Mouse.Schema");
const { getAllMouses, addMouse, updateMouseLocation } = require("../model/Mouse.model");

mouseRouter.get('/', async (req, res) => {
    const result = await getAllMouses();
    res.status(200).send(result);
});

mouseRouter.post('/', async (req, res) => {
    const newMouse = ({
        site,
        location,
        employee
    } = req.body);
    const quantity = req.body.quantity;

    const result = {};
    for (let i = 0; i < quantity; i++) {
     result[`mouse${i + 1}`] = await addMouse(newMouse);
    }
    res.status(201).send(result);
});

mouseRouter.put("/location", async (req, res) => {
    const {employee, location} = req.body;
    const result = updateMouseLocation({employee, location});

    res.status(200).send(result);
});


module.exports = mouseRouter;