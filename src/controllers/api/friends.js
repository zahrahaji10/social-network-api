const { User } = require("../../models");

// get all friends
const getAFriend = (req, res) => {
  try {
    res.send("addAFriend");
  } catch (error) {
    console.log(`[ERROR]: Failed to add a friend | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  add a friend
const addAFriend = async (req, res) => {
  try {
    // get id
    const { id } = req.params;

    const createAFriend = await User.findByIdAndUpdate(id, {
      $push: { friends: id },
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to add a friend | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  delete a friend
const deleteAFriend = (req, res) => {
  try {
    res.send("deleteAFriend");
  } catch (error) {
    console.log(`[ERROR]: Failed to delete a friend | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// export all controller fns
module.exports = { getAFriend, addAFriend, deleteAFriend };
