// get all thoughts
const getThoughts = (req, res) => {
  try {
    res.send("getThoughts");
  } catch (error) {
    console.log(`[ERROR]: Failed to get all thoughts| ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// get a thought
const getAThoughtsById = (req, res) => {
  try {
    // get the user id of the user using req.body
    res.send("getAThoughtsById");
  } catch (error) {
    console.log(`[ERROR]: Failed to get a thought by id | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  create a thought
const createAThought = (req, res) => {
  try {
    res.send("createAThought");
  } catch (error) {
    console.log(`[ERROR]: Failed to create a thought | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  update a thought
const updateAThought = (req, res) => {
  try {
    res.send("updateAThought");
  } catch (error) {
    console.log(`[ERROR]: Failed to update a thought| ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  delete a user
const deleteAThought = (req, res) => {
  try {
    res.send("deleteAThought");
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
