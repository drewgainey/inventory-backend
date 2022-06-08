const express = require("express");
const keyboardRouter = express.Router();
const Keyboard = require("../model/Keyboard.Schema");
const { getAllKeyboards, addKeyboard } = require("../model/Keyboard.model");

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
    const result = await addKeyboard(newKeyboard);
    res.status(201).send(result);
});

module.exports = keyboardRouter;