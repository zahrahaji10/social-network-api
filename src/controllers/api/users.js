const { User } = require("../../models");

// get all users
const getUsers = async (req, res) => {
  try {
    // get all users using model
    const users = await User.find({});

    // if no data
    if (!users) {
      return res.json(404).json({ success: false });
    }

    // return data
    return res.json({ data: users });
  } catch (error) {
    console.log(`[ERROR]: Failed to get users | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

// get a user
const getUserId = async (req, res) => {
  try {
    // get the user id of the user using req.body
    const { id } = req.params;

    // get a user using model
    const user = await User.findById(id);

    // if no data
    if (!user) {
      return res.json(404).json({ success: false });
    }

    // return data
    return res.json({ data: user });
  } catch (error) {
    console.log(`[ERROR]: Failed to get a user by id | ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  create a user
const createUser = async (req, res) => {
  try {
    // get the email and userName
    const { userName, email } = req.body;

    // if no data
    if (!userName && email) {
      return res.status(400).json({
        success: false,
      });
    }
    // create user
    await User.create({ userName, email });

    // return data
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to get create a user| ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  update a user
const updateUser = async (req, res) => {
  try {
    // get id
    const { id } = req.params;

    // update user
    const updateUser = await User.findByIdAndUpdate(id, req.body);

    // if user doesn't exist
    if (!updateUser) {
      return res.status(500).json({ success: false });
    }
    // return data
    return res.json({ success: true });
  } catch (error) {
    console.log(`[ERROR]: Failed to update a user| ${error.message}`);
    return res.status(500).json({ error: "Internal server error" });
  }
};

//  delete a user
const deleteUser = async (req, res) => {
  try {
    // get id
    const { id } = req.params;

    // get the user and delete
    await User.findByIdAndDelete(id);

    // return data
    return res.json({ success: true });
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
