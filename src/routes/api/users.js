// ** /api/users ** endpoint

// external imports
const { Router } = require("express");

// internal imports of controller functions
const {
  getUsers,
  getUserId,
  createUser,
  updateUser,
  deleteUser,
} = require("../../controllers/api/users");
const friends = require("./friends");

// create a new instance of a router
const router = Router();

// use the router
router.get("/", getUsers);
router.get("/:id", getUserId);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);
router.use("/friends", friends);

// export module
module.exports = router;
