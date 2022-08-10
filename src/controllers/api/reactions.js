const { Thought } = require("../../models");

//  create a reaction
const createAReactions = async (req, res) => {
  try {
    const { thoughtId } = req.params;

    //create a reaction
    const newReaction = await Thought.findByIdAndUpdate(thoughtId, {
      $push: {
        reactions: req.body,
      },
    });

    if (!newReaction) {
      return res.status(500).json({ success: false });
    }
    // return data
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to create a reaction | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  delete a reaction
const updateAReaction = async (req, res) => {
  try {
    // get id
    const { reactionId, thoughtId } = req.params;

    // update user
    const updateReaction = await Thought.findByIdAndUpdate(thoughtId, {
      $push: { reactions: { _id: reactionId, ...req.body } },
    });

    // if user doesn't exist
    if (!updateReaction) {
      return res.status(500).json({ success: false });
    }
    // return data
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete a reaction | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  delete a reaction
const deleteAReactions = async (req, res) => {
  try {
    // get id
    const { thoughtId, reactionId } = req.params;

    //find the thought
    await Thought.findByIdAndUpdate(thoughtId, {
      $pull: { reactions: { _id: reactionId } },
    });

    // return data
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete a reaction | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// export all controller fns
module.exports = { createAReactions, updateAReaction, deleteAReactions };
