// get all users
const getUsers = (req, res) => {
  try {
    res.send("getUsers");
  } catch (error) {
    console.log(`[ERROR]: Failed to get users | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// get a user
const getUserId = (req, res) => {
  try {
    // get the user id of the user using req.body
    res.send("getUserId");
  } catch (error) {
    console.log(`[ERROR]: Failed to get a user by id | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  create a user
const createUser = (req, res) => {
  try {
    res.send("g createUser");
  } catch (error) {
    console.log(`[ERROR]: Failed to get create a user| ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  update a user
const updateUser = (req, res) => {
  try {
    res.send("updateUser");
  } catch (error) {
    console.log(`[ERROR]: Failed to update a user| ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  delete a user
const deleteUser = (req, res) => {
  try {
    res.send("deleteUser");
  } catch (error) {
    console.log(`[ERROR]: Failed to delete a user| ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// export all controller fns
module.exports = {
  getUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
};
