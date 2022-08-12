// ** /api/thoughts/:thoughtId/reactions ** endpoint

// external imports
const { Router } = require("express");

// internal imports of controller functions
const {
  getThoughts,
  getAThoughtsById,
  createAThought,
  updateAThought,
  deleteAThought,
} = require("../../controllers/api/thoughts");
const reactions = require("./reactions");

// create a new instance of a router
const router = Router({ mergeParams: true });

// use the router
router.get("/", getThoughts);
router.get("/:id", getAThoughtsById);
router.post("/", createAThought);
router.put("/:id", updateAThought);
router.delete("/:id", deleteAThought);
router.use("/reactions", reactions);

// export module
module.exports = router;
