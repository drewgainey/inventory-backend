const express = require("express");
const keyboardRouter = express.Router();
const Keyboard = require("../model/Keyboard.Schema");
const { getAllKeyboards, addKeyboard, updateKeyboardLocation } = require("../model/Keyboard.model");

keyboardRouter.get('/', async (req, res) => {
    const result = await getAllKeyboards();
    res.status(200).send(result);
});

keyboardRouter.post('/', async (req, res) => {
    const newKeyboard = ({
        site,
        location,
        employee
    } = req.body);
    const quantity = req.body.quantity;

    const result = {};
    for (let i = 0; i < quantity; i++) {
     result[`keyboard${i + 1}`] = await addKeyboard(newKeyboard);
    }
    res.status(201).send(result);
});

keyboardRouter.put("/location", async (req, res) => {
    const {employee, location} = req.body;
    const result = updateKeyboardLocation({employee, location});

    res.status(200).send(result);
});

module.exports = keyboardRouter;