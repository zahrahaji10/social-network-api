// internal imports
const connectToDatabase = require("../config/connection");
const { User } = require("../models");
const { Reaction } = require("../models");
const { Thought } = require("../models");
const users = require("./users.json");
const reactions = require("./reactions.json");
const thoughts = require("./thoughts.json");

const deleteTables = async () => {
  await User.deleteMany({});
  await Reaction.deleteMany({});
  await Thought.deleteMany({});
};

const createTables = async () => {
  await User.insertMany(users);
  await Reaction.insertMany(reactions);
  await Thought.insertMany(thoughts);
};

const init = async () => {
  try {
    // establish connection
    await connectToDatabase();
    console.log(
      `[INFO]: ✅ Successfully connected to database | ${process.env.DB_NAME}`
    );

    // delete the tables
    await deleteTables();

    // create the tables
    await createTables();

    console.log(`[ERROR]: ✅ Successfully seeded database  | ${error.message}`);
  } catch (error) {
    console.log(`[ERROR]:  Failed to seed database | ${error.message}`);
  }
};

process.exit(0);

init();
