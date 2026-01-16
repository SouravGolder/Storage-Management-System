const Item = require("./item.model");

const createItem = async (data) => {
  return await Item.create(data);
};

const getItems = async () => {
  return await Item.find().populate("storageId");
};

const stockIn = async (id, amount) => {
  return await Item.findByIdAndUpdate(
    id,
    { $inc: { quantity: amount } },
    { new: true }
  );
};

const stockOut = async (id, amount) => {
  const item = await Item.findById(id);

  if (!item) {
    throw new Error("Item not found");
  }

  if (item.quantity < amount) {
    throw new Error("Insufficient stock");
  }

  item.quantity -= amount;
  await item.save();
  return item;
};

module.exports = {
  createItem,
  getItems,
  stockIn,
  stockOut
};
