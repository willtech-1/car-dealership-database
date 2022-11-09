// Imported react libraries and hooks.
import React, { useState, useEffect } from "react";
// Requiring Axios.
import axios from "axios";
// Imported components from React Bootstrap.
import { Modal } from "react-bootstrap";


// display iterated old cars in a table format
const Car = ({ model, make, regNumber, owner }) => (
  <tr>
    <td>{model}</td>
    <td>{make}</td>
    <td>{regNumber}</td>
    <td>{owner}</td>
  </tr>
);


const OlderCarList = () => {
  const [cars, setCars] = useState([]);

  // fetch older cars from the database on every render using the useEffect Hook
  useEffect(() => {
    axios
      .get("http://localhost:8080/api/cars/olderCars")
      .then((res) => {
        const data = res.data;
        setCars(data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="listcontainer">
      <>
        <Modal.Header>
          <Modal.Title>Cars Older than Five Years</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <table>
            <thead>
              <tr className="theaderrow">
                <th className="th-cell-left">Model</th>
                <th>Make</th>
                <th>Registration</th>
                <th className="th-cell-right">Owner</th>
              </tr>
            </thead>
            <tbody>
              {cars.map((car) => (
                <Car key={car._id} {...car} />
              ))}
            </tbody>
          </table>
        </Modal.Body>
      </>
    </div>
  );
};

export default OlderCarList;
