const mongoose = require("mongoose");

const connectDB = async (MONGO_URI) => {
  try {
    const conn = await mongoose.connect(MONGO_URI);
    console.log(`Database connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectDB;
