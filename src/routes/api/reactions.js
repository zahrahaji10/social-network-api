// ** /api/reactions** endpoint

// external imports
const { Router } = require("express");

// internal imports of controller functions
const {
  updateAReaction,
  createAReactions,
  deleteAReactions,
} = require("../../controllers/api/reactions");
const reactions = require("./reactions");

// create a new instance of a router
const router = Router();

// use the router
router.put("/:thoughtId/update/:reactionId", updateAReaction);
router.post("/:thoughtId", createAReactions);
router.delete("/:thoughtId/delete/:reactionId", deleteAReactions);

// export module
module.exports = router;
