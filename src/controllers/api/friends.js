const { User } = require("../../models");

//  add a friend
const createAFriend = async (req, res) => {
  try {
    // get user id and friendId
    const { id, friendId } = req.params;

    // create the friend using ids
    await User.findByIdAndUpdate(id, {
      $push: { friends: friendId },
    });

    // return data
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to add a friend | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  delete a friend
const deleteAFriend = async (req, res) => {
  try {
    // get user id and friendId
    const { id, friendId } = req.params;

    // delete the friend using ids
    await User.findByIdAndUpdate(id, {
      $pull: { friends: friendId },
    });
    // return data
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to delete a friend | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// export all controller fns
module.exports = { createAFriend, deleteAFriend };
