const express = require("express");
const inventoryRouter = express.Router();
const { getAllComputers } = require("../model/Computer.model");
const { getAllMonitors } = require("../model/Monitor.model");
const { getAllHeadsets } = require("../model/Headset.model");
const { getAllKeyboards } = require("../model/Keyboard.model");
const { getAllMouses } = require("../model/Mouse.model");

inventoryRouter.get("/", async (req, res, next) => {
  const computers = await getAllComputers();
  const monitors = await getAllMonitors();
  const headsets = await getAllHeadsets();
  const keyboards = await getAllKeyboards();
  const mouses = await getAllMouses();

  const result = {
    inventory: {
      computers,
      monitors,
      headsets,
      keyboards,
      mouses
    }
  }

  res.status(200).send(result);
});

module.exports = inventoryRouter;
