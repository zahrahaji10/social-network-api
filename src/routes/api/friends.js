// ** /api/users/id/friends/ ** endpoint

// external imports
const { Router } = require("express");

// internal imports of controller functions
const {
  getAFriend,
  addAFriend,
  deleteAFriend,
} = require("../../controllers/api/friends");

// create a new instance of a router
const router = Router();

// use the router
router.get("/", getAFriend);
router.post("/:id", addAFriend);
router.delete("/:id", deleteAFriend);

// export module
module.exports = router;
