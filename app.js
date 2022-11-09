// import all needed modules
const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const carRoutes = require("./routes/carRoutes.js");
const morgan = require('morgan')
require("dotenv").config();

/**
 * Enabling middleware to allow server to access MongoDB. To accept requests to the body in .json format.
 *  Added credentials (set to boolean value true) and origin (set environment) headers to CORS to handle cross-site request cookies.
 * Included the body-parser middleware so that the Express server is able to access content that is passed in the body of the HTTP request.
 */

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());
app.use(express.json());
// morgan log request
app.use(morgan("tiny"));
// routes
app.use("/api/cars", carRoutes);



mongoose.connect(process.env.MONGO_URI, () =>
  console.log("You are connected to the Database!")
);


// listening port
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is listening on PORT ${PORT}...`));

