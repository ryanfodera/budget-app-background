require("dotenv").config();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db");

connectDB(MONGO_URI);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/transactions", require("./routes/route"));
app.use("*", (req, res) => {
  res.status(404).json({ success: false, error: "Not Found" });
});

app.listen(PORT, () => console.log(`Server listening on *::${PORT}`));
