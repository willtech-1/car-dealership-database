// Requiring Express.
const express = require("express");
// Requiring Router from Express.
const router = express.Router();
// Requiring controllers from the controllers folder's carsController.js.
const { getAllCars, getOlderCars, createCar, updateSingleCar, updateManyCars, deleteCar } = require('../controllers/carControllers')


router.get("/", getAllCars).get("/olderCars", getOlderCars);
router.post("/create", createCar);
router.put("/updateOne/:id", updateSingleCar).put("/updateMany/:model", updateManyCars);
router.delete("/delete/:id", deleteCar);

// Exporting controllers to server.js.
module.exports = router;