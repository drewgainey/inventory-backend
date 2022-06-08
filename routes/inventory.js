const express = require("express");
const inventoryRouter = express.Router();
const { getAllInventory, addInventory } = require("../model/Inventory.model");

inventoryRouter.get("/", async (req, res, next) => {
  const result = await getAllInventory();
  res.status(200).send(result);
});

inventoryRouter.post("/", async (req, res, next) => {
  const newInventory = ({ itemType, site, location, brand, yearPurchased } =
    req.body);

  const result = await addInventory(newInventory);
  res.status(201).send(result);
});

// inventoryRouter.get("/summary", async (req, res, next) => {
//   const inventory = await getAllInventory();
//   res.status(200).send(result);
// });
module.exports = inventoryRouter;
