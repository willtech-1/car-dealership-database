// import Schema
const Car = require("../models/carModels.js");


// get all cars from the data base
const getAllCars = async (req, res) => {
  try {
    const getCars = await Car.find({});
    // http 200 successful request
    res.status(200).send(getCars);
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "An error occured while retrieving the data from the database",
    });
  }
};

//create car
const createCar = async (req, res) => {
  // destructure req.body values
  const { model, make, regNumber, owner, address, prevOwners } = req.body;
  try {
    let car = await new Car({
      model: model,
      make: make,
      regNumber: regNumber,
      owner: owner,
      address: address,
      prevOwners: prevOwners,
    });
    car.save((err, data) => {
      console.log(data);
    });
    // http status 201 car was created successfully
    res.status(201).json({ message: "The Car was Added!" });
  } catch (error) {
    if (error) {
      console.log(error);
      // http status 500 server error
      res.status(500).json({ message: "There was an error" });
    }
  }
};


// Requesting all the cars information from MongoDB and returning the response with the information.
const getOlderCars = async (req, res) => {
  try {
    // find the model that was made before 2017
    let olderCars = await Car.find({ model: { $lt: 2017 } })

    // if the response is successful
    res.status(200).json(olderCars)
  } catch (error) {
    if (error) {
      console.log(error);
      // http status 500 server error
      res.status(500).json({ message: "There was an error" });
    }
  }
};


// update car
const updateSingleCar = async (req, res) => {
  try {
    // destructure the ID 
    const { id: carID } = req.params;

    // findOne and update using their mongo db given ids
    const car = await Car.findOneAndUpdate({ _id: carID }, req.body);

    if (!car) {
      // not found request status 404
      res
        .status(404)
        .json({ message: `Car with the id: ${carID} not found...` });
    }
    // success request
    res.status(200).json({ car });
  } catch (error) {
    console.log(error);
    // http status 500 server error
    res.status(500).json({ message: "There was an error" });
  }
};


// Allowing a user to update more than one car, using the model year of the car. Using $set to set the information for the relevant cars with
// the matching model years.
const updateManyCars = async (req, res) => {
  // destructure values from req.body
  const { model, make, regNumber, owner, address, prevOwners } = req.body

  try {
    let updatedCars = await Car.updateMany({ model: req.params.model }, {
      $set: {
        model: model,
        make: make,
        owner: owner,
        regNumber: regNumber,
        address: address,
        prevOwners: prevOwners,
      },
    })

    // successful response
    res.status(200).json(updatedCars)
  } catch (error) {
    if (error) {
      console.log(error);
      // http status 500 server error
      res.status(500).json({ message: "There was an error" });
    }
  }
}


// delete car
const deleteCar = async (req, res) => {
  try {
    // get the id
    const { id: carID } = req.params;
    const car = await Car.findOneAndDelete({ _id: carID }, req.body);
    if (!car) {
      // not found request status 404
      res
        .status(404)
        .json({ message: `Car with the id: ${carID} not found...` });
    }
    // successful request
    res.status(200).json({ car });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "There was an error" });
  }
};

// export all controllers
module.exports = { getAllCars, getOlderCars, createCar, updateSingleCar, updateManyCars, deleteCar }


