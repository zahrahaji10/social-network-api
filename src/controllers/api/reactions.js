// get all reactions
const getAllReactions = (req, res) => {
  try {
    res.send(" getAllReactions");
  } catch (error) {
    console.log(`[ERROR]: Failed to get all reactions | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  create a reaction
const createAReactions = (req, res) => {
  try {
    res.send("createAReactions");
  } catch (error) {
    console.log(`[ERROR]: Failed to create a reaction | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  delete a reaction
const deleteAReactions = (req, res) => {
  try {
    res.send("deleteAReactions");
  } catch (error) {
    console.log(`[ERROR]: Failed to delete a reaction | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// export all controller fns
module.exports = { getAllReactions, createAReactions, deleteAReactions };
