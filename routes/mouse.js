const express = require("express");
const mouseRouter = express.Router();
const Mouse = require("../model/Mouse.Schema");
const { getAllMouses, addMouse } = require("../model/Mouse.model");

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
    const result = await addMouse(newMouse);
    res.status(201).send(result);
});

module.exports = mouseRouter;