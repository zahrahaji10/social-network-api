// destructure the mongoose to use model and schema
const { Schema, model } = require("mongoose");

// import sub documents for schema
const Thought = require("./Thought");
const friend = require("./friend");

// define your schema oject  and define your required fields
const userSchema = {
  userName: {
    type: String,
    unique: true,
    required: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    match: true,
    minLength: 2,
    maxLength: 50,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "Thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
};

//!! Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

// create a new instance of mongoose schema which takes on userSchema object
const schema = new Schema(userSchema);

// create the User model using mongoose class schema
const User = model("User", schema);

// export the model
module.exports = User;
