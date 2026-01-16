const itemService = require("./item.service");

const createItem = async (req, res) => {
  try {
    const item = await itemService.createItem(req.body);
    res.status(201).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getItems = async (req, res) => {
  try {
    const items = await itemService.getItems();
    res.status(200).json(items);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const stockIn = async (req, res) => {
  try {
    const { amount } = req.body;
    const item = await itemService.stockIn(req.params.id, amount);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const stockOut = async (req, res) => {
  try {
    const { amount } = req.body;
    const item = await itemService.stockOut(req.params.id, amount);
    res.status(200).json(item);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  createItem,
  getItems,
  stockIn,
  stockOut
};
