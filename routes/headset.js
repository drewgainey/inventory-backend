const express = require("express");
const headsetRouter = express.Router();
const Headset = require("../model/Headset.Schema");
const { getAllHeadsets, addHeadset } = require("../model/Headset.model");

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
    const result = await addHeadset(newHeadset);
    res.status(201).send(result);
});

module.exports = headsetRouter;