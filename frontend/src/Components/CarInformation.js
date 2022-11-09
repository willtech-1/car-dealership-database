// Imported react libraries and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components.
import OlderCarList from "./OlderCarList.js";

// get previous owners function 
const getPreviousOwners = (inputArray) => {
  let newArray = [];
  if (inputArray[0]) {
    for (const owner in inputArray[0]) {
      const currentPreviousOwner = inputArray[0][owner];
      newArray.push(currentPreviousOwner);
    }
  }
  return newArray.join("");
};

// display car information component
const Car = ({
  _id,
  model,
  make,
  regNumber,
  owner,
  address,
  prevOwners,
}) => (

  <tr>
    <td>{_id}</td>
    <td>{model}</td>
    <td>{make}</td>
    <td>{regNumber}</td>
    <td>{owner}</td>
    <td>{address}</td>
    <td>{getPreviousOwners(prevOwners)}</td>
    
  </tr>
);


const CarInformation = () => {
  const [cars, setCars] = useState([]);

  // useEffect will get cars from the database on every render
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/cars")
      .then((res) => {
        const data = res.data;
        setCars(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div id="listcontainer">
      <h6 id="tableheader">Car Information</h6>
      <table>
        <thead>
          <tr className="theaderrow">
            <th className="th-cell-left">ID</th>
            <th>Model</th>
            <th>Make</th>
            <th>Registration</th>
            <th>Owner</th>
            <th>Address</th>
            <th className="th-cell-right">Previous Owners</th>
          </tr>
        </thead>
        <tbody>
          {cars.map((car) => (
            <Car key={car._id} {...car} />
          ))}
        </tbody>
      </table>
      <OlderCarList />
    </div>
  );
};

export default CarInformation;
