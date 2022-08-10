const { Thought, User } = require("../../models");

// get all thoughts
const getThoughts = async (req, res) => {
  try {
    // get all users using model
    const thoughts = await Thought.find({});

    // if no data
    if (!thoughts) {
      return res.json(404).json({ success: false });
    }

    // return data
    return res.json({ data: thoughts });
  } catch (error) {
    console.log(`[ERROR]: Failed to get all thoughts| ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// get a thought
const getAThoughtsById = async (req, res) => {
  try {
    // get the thoughts id of the user using req.body
    const { id } = req.params;

    // get a thoughts using model
    const thoughts = await Thought.findById(id);

    // if no data
    if (!thoughts) {
      return res.json(404).json({ success: false });
    }

    // return data
    return res.json({ data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to get a thought by id | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  create a thought
const createAThought = async (req, res) => {
  try {
    const { text, userName } = req.body;

    //create a thought
    const newThought = await Thought.create({
      text,
      userName,
    });

    // Add thought to user
    await User.findOneAndUpdate(
      { userName },
      { $push: { thoughts: newThought._id } }
    );
    // if user doesn't exist
    if (!newThought) {
      return res.status(500).json({ success: false });
    }
    // return data
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create a thought | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  update a thought
const updateAThought = async (req, res) => {
  try {
    // get id
    const { id } = req.params;

    // update user
    const updateThought = await Thought.findByIdAndUpdate(id, req.body);

    // if user doesn't exist
    if (!updateThought) {
      return res.status(500).json({ success: false });
    }
    // return data
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to update a thought| ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  delete a user
const deleteAThought = async (req, res) => {
  try {
    // get id
    const { id } = req.params;

    //find the thought
    await Thought.findByIdAndDelete(id);

    // return data
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete a thought| ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// export all controller fns
module.exports = {
  getThoughts,
  getAThoughtsById,
  createAThought,
  updateAThought,
  deleteAThought,
};
