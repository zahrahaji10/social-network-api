// ** /api ** endpoint

// external imports
const { Router } = require("express");

// internal imports
const users = require("./users");
const thoughts = require("./thoughts");
const reactions = require("./reactions");

// create a new instance of a router
const router = Router();

// register the route
router.use("/users", users);
router.use("/thoughts", thoughts);
// router.use("/reactions", reactions);

// export module
module.exports = router;
