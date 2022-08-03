// ** /api/reactions** endpoint

// external imports
const { Router } = require("express");

// internal imports of controller functions
const {
  getAllReactions,
  createAReactions,
  deleteAReactions,
} = require("../../controllers/api/reactions");
const reactions = require("./reactions");

// create a new instance of a router
const router = Router();

// use the router
router.get("/", getAllReactions);
router.post("/", createAReactions);
router.delete("/:id", deleteAReactions);

// export module
module.exports = router;
