const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TransactionSchema = new Schema(
  {
    item_name: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    category: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Transaction", TransactionSchema);
