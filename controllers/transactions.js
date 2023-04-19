const asyncHandler = require("express-async-handler");
const Transaction = require("../models/Transaction");

// @method GET
// @route /transactions
// @desc Get a list (or index) of all transactions
const getTransactions = asyncHandler(async (req, res) => {
  const transactions = await Transaction.find({}).lean();
  res.json({ success: true, transactions });
});

// @method POST
// @route /transactions
// @desc Create a new transaction
const createTransaction = asyncHandler(async (req, res) => {
  const { item_name, amount, date, from, category } = req.body;

  const newTransaction = await Transaction.create({
    item_name,
    amount,
    date,
    from,
    category,
  });

  if (newTransaction) {
    res.json({ success: true, transaction: newTransaction });
  } else {
    res.json({ success: false, error: "Error while creating new transaction" });
  }
});

// @method GET
// @route /transactions/:id
// @desc get an individual transaction
const getSingleTransaction = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const transaction = await Transaction.find({ _id: id });
  if (transaction) {
    res.json({ success: true, transaction });
  } else {
    res.json({ success: false, error: "No transaction found with that ID" });
  }
});

// @method DELETE
// @route /transactions/:id
// @desc delete an individual transaction
const deleteSingleTransaction = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const deleted = await Transaction.deleteOne({ _id: id });
  res.json({ success: true });
});

// @method DELETE
// @route /transactions/:id
// @desc update an individual transaction
const updateSingleTransaction = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const { item_name, amount, date, from, category } = req.body;

  const updatedTransaction = await Transaction.updateOne(
    { _id: id },
    { item_name, amount, date, from, category },
    { upsert: false }
  );
  if (updatedTransaction) {
    res.json({ success: true, transaction: updatedTransaction });
  } else {
    res.json({ success: false, error: "Error while updating transaction" });
  }
});

module.exports = {
  getTransactions,
  createTransaction,
  getSingleTransaction,
  deleteSingleTransaction,
  updateSingleTransaction,
};
