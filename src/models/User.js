// destructure the mongoose to use model and schema
const { Schema, model } = require("mongoose");
const isValidEmail = require("../helpers/validEmail");

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
    validate: {
      validator: isValidEmail,
      message: "Not a valid Email",
    },
    match: true,
  },
  thoughts: [
    {
      type: Schema.Types.ObjectId,
      ref: "thought",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
};

// create a new instance of mongoose schema which takes on userSchema object
const schema = new Schema(userSchema);

// virtual to get total friends
schema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// create the User model using mongoose class schema
const User = model("User", schema);

// export the model
module.exports = User;
