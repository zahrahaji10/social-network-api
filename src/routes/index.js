// **entry file to routes**

// import express router
const { Router } = require("express");

//internal import of the api file
const api = require("./api");

// create a new instance of a router
const router = Router();

// register the route using the router
router.use("/api", api);

// export module
module.exports = router;
