const router = require("express").Router();

// controllers
const {
  getTransactions,
  createTransaction,
  deleteSingleTransaction,
  getSingleTransaction,
  updateSingleTransaction,
} = require("../controllers/transactions");

// @method GET
// @route /transactions
router.get("/", getTransactions);

// @method POST
// @route /transactions
router.post("/", createTransaction);

// @method GET
// @route /transactions/:id
router.get("/:id", getSingleTransaction);

// @method PUT
// @route /transactions/:id
router.put("/:id", updateSingleTransaction);

// @method DELETE
// @route /transactions/:id
router.delete("/:id", deleteSingleTransaction);

module.exports = router;
