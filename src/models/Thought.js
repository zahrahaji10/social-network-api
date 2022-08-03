// destructure the mongoose to use model and schema
const { Schema, model } = require("mongoose");
const moment = require("moment");

// create a default time
const time = moment().format("MMM Do YY");

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
  userName: {
    type: String,
    required: true,
  },
  reaction: [
    {
      type: Schema.Types.ObjectId,
      ref: "Reaction",
    },
  ],
};

// !!Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.

// create a new instance of mongoose schema which takes on userSchema object
const schema = new Schema(thoughtSchema);

// create the Thought model using mongoose class schema
const Thought = model("Thought", schema);

// export the model
module.exports = Thought;
