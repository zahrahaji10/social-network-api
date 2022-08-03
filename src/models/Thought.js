// destructure the mongoose to use model and schema
const { Schema, model } = require("mongoose");

// define your schema oject  and define your required fields
const thoughtSchema = {
  thoughtText: {
    type: String,
    required: true,
    minLength: 1,
    maxLength: 280,
  },
  createdAt: {
    type: Date,
    default: time,
  },
  user: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  ],
  friends: [
    {
      type: Schema.Types.ObjectId,
      ref: "Friends",
    },
  ],
};

// create a new instance of mongoose schema which takes on userSchema object
const schema = new Schema(thoughtSchema);

// create the Thought model using mongoose class schema
const Thought = model("Thought", schema);

// export the model
module.exports = Thought;
