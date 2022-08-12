// ** /api/users/id/friend/ ** endpoint

// external imports
const { Router } = require("express");

// internal imports of controller functions
const {
  createAFriend,
  deleteAFriend,
} = require("../../controllers/api/friends");

// create a new instance of a router
const router = Router();

// use the router
router.post("/:id/add/:friendId", createAFriend);
router.delete("/:id/delete/:friendId", deleteAFriend);

// export module
module.exports = router;
