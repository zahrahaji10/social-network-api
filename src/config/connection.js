// external imports
require("dotenv").config();
const mongoose = require("mongoose");

const connectToDatabase = async () => {
  try {
    // connect to  mongoDB
    const DB_NAME = process.env.DB_NAME;
    const MONGODB_URI =
      process.env.MONGODB_URI || `mongodb://127.0.0.1:27017/${DB_NAME}`;

    const options = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };

    await mongoose.connect(MONGODB_URI, options);

    console.log(
      `[INFO]: ✅ Successfully connected to database | ${process.env.DB_NAME}`
    );
  } catch (error) {
    console.log(`[ERROR]:  Failed to connect to database | ${error.message}`);

    throw new Error(" Failed to connect to database");
  }
};

module.exports = connectToDatabase;
