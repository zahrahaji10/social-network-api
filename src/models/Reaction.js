// destructure the mongoose to use model and schema
const { Schema, model } = require("mongoose");

// import sub documents for schema
const Thought = require("./Thought");
const time = require("../../utils/moment");

// define your schema oject  and define your required fields
const reactionSchema = {
  reactionId: {
    id: Schema.Types.ObjectId,
  },
  reactionBody: {
    type: String,
    required: true,
    maxLength: 280,
  },
  userName: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: time,
  },
};
//!! Create a virtual called friendCount that retrieves the length of the user's friends array field on query.

// create a new instance of mongoose schema which takes on userSchema object
const schema = new Schema(userSchema);

// create the User model using mongoose class schema
const User = model("User", schema);

// export the model
module.exports = User;
