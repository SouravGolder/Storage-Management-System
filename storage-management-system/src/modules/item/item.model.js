const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    category: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      default: 0
    },
    storageId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Storage",
      required: true
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Item", itemSchema);
