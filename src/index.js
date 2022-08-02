// import express
const express = require("express");

// set up port
const PORT = process.env.PORT || 4000;

// new instance of app created
const app = express();

// fn to create connection and listen to port
const init = async () => {
  try {
    // connect to DB
    await connection.sync({ force: false });

    // server listen on PORT
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(`[ERROR]: Failed to start server | ${error.message}`);
  }
};

init();
