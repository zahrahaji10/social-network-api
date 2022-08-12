// destructure the mongoose to use model and schema
const { Schema, model } = require("mongoose");

const validateEmail = (email) => {
  const validEmail = /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
  return validEmail.test(email);
};

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
      validator: validateEmail,
      message: "invalid email",
    },
    match: [
      /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
      "Please enter a valid email",
    ],
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

// create a new instance of mongoose schema which takes on userSchema object
const schema = new Schema(userSchema, {
  toJSON: {
    getters: true,
  },
  id: false,
});

// virtual to get total friends
schema.virtual("friendCount").get(function () {
  return this.friends.length;
});

// create the User model using mongoose class schema
const User = model("User", schema);

// export the model
module.exports = User;
