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
} = require("../../controllers/users");

// create a new instance of a router
const router = Router();

// use the router
router.get("/", getUsers);
router.get("/:id", getUserId);
router.post("/", createUser);
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

// export module
module.exports = router;
