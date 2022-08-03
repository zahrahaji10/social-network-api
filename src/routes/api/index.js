// ** /api ** endpoint

// external imports
const { Router } = require("express");

// internal imports
const users = require("./users");
const reactions = require("./reactions");
const thoughts = require("./thoughts");

// create a new instance of a router
const router = Router();

// register the route
router.use("/users", users);
// router.use("/reactions", reactions);
// router.use("/thoughts", thoughts);

// export module
module.exports = router;
