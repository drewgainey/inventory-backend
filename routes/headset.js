const express = require("express");
const headsetRouter = express.Router();
const Headset = require("../model/Headset.Schema");
const { getAllHeadsets, addHeadset, updateHeadsetLocation } = require("../model/Headset.model");

headsetRouter.get('/', async (req, res) => {
    const result = await getAllHeadsets();
    res.status(200).send(result);
});

headsetRouter.post('/', async (req, res) => {
    const newHeadset = ({
        site,
        location,
        style,
        employee
    } = req.body);
    const quantity = req.body.quantity;

    const result = {};
    for (let i = 0; i < quantity; i++) {
     result[`headset${i + 1}`] = await addHeadset(newHeadset);
    }
    res.status(201).send(result);
});

headsetRouter.put("/location", async (req, res) => {
    const {employee, location} = req.body;
    const result = updateHeadsetLocation({employee, location});

    res.status(200).send(result);
});

module.exports = headsetRouter;