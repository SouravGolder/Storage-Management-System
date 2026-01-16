const express = require("express");
const router = express.Router();

const {
  createItem,
  getItems,
  stockIn,
  stockOut
} = require("./item.controller");

router.post("/", createItem);
router.get("/", getItems);
router.post("/:id/stock-in", stockIn);
router.post("/:id/stock-out", stockOut);

module.exports = router;
