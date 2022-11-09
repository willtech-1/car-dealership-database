import React, { useState } from "react";
// axios for data fetching
import axios from "axios";
// react bootstrap for styling
import {
  Button,
  Container,
  Form,
  FormGroup,
  FormControl,
  FormLabel,
} from "react-bootstrap";

const EditCarList = () => {
  // car information default state
  const [id, setId] = useState("");
  const [model, setModel] = useState("");
  const [make, setMake] = useState("");
  const [owner, setOwner] = useState("");
  const [regNumber, setRegNumber] = useState("");
  const [address, setAddress] = useState("");
  const [prevOwners, setPrevOwners] = useState("");

  // create car function 
  const createCar = (e) => {
    e.preventDefault();
    // create new car with post request
    axios
      .post("http://localhost:8080/api/cars/create", {
        model,
        make,
        owner,
        regNumber,
        address,
        prevOwners,
      })
      .then((response) => {
        alert('Car successfully created!')
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
      });
  };

  // update single car function
  const updateOneCar = (e) => {
    // prevent refresh after onclick event
    e.preventDefault();
    //axios put request to update
    axios
      .put(`http://localhost:8080/api/cars/updateOne/${id}`, {
        model: model,
        make: make,
        owner: owner,
        regNumber: regNumber,
        address: address,
        prevOwners: prevOwners,
      })
      .then((res) => {
        alert('Car successfully updated!')
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
      });
  };


  // update many cars from the database function
  const updateManyCars = (e) => {
    // prevent refresh after onclick event
    e.preventDefault();
    //axios put request to update
    axios
      .put(`http://localhost:8080/api/cars/updateMany/${model}`, {
        model: model,
        make: make,
        owner: owner,
        regNumber: regNumber,
        address: address,
        prevOwners: prevOwners,
      })
      .then((res) => {
        alert('Car successfully updated!')
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
      });
  };

  // delete car function
  const removeCar = (e) => {
    // prevent default refreshing on onclick event
    e.preventDefault();
    // delete the matching car ID
    axios
      .delete(`http://localhost:8080/api/cars/delete/${id}`)
      .then((res) => {
        alert('Car successfully deleted!')
        window.location.reload();
      })
      .catch((error) => {
        console.log(error)
      });
  };

  /*
    input values on onChange() event is triggered to set the new values are entered 
    CRUD form that can be used to add, update one or many cars and delete cars.
   */

  return (
    <div>
      <Container>
        <Form className="d-flex flex-column">
          <FormGroup>
            <FormLabel htmlFor="id">ID:</FormLabel>
            <FormControl
              type="text"
              name="id"
              value={id}
              onChange={(e) => setId(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="model">Model:</FormLabel>
            <FormControl
              type="text"
              name="model"
              value={model || ""}
              onChange={(e) => setModel(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="make">Make:</FormLabel>
            <FormControl
              type="text"
              name="make"
              value={make || ""}
              onChange={(e) => setMake(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="owner">Owner:</FormLabel>
            <FormControl
              type="text"
              name="owner"
              value={owner || ""}
              onChange={(e) => setOwner(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="registration">Registration:</FormLabel>
            <FormControl
              type="text"
              name="registration"
              value={regNumber || ""}
              onChange={(e) => setRegNumber(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="address">Address:</FormLabel>
            <FormControl
              type="text"
              name="address"
              value={address || ""}
              onChange={(e) => setAddress(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <FormLabel htmlFor="previousOwners">Previous Owners:</FormLabel>
            <FormControl
              type="text"
              name="previousOwners"
              value={prevOwners || ""}
              onChange={(e) => setPrevOwners(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Button
              type="button"
              title="Add New Car"
              onClick={(e) => createCar(e)}
            >
              Add
            </Button>
            <Button
              type="button"
              title="Update a Car"
              onClick={(e) => updateOneCar(e)}
            >
              Update
            </Button>
            <Button
              type="button"
              title="Update Many Cars"
              onClick={(e) => updateManyCars(e)}
            >
              X 2 Update
            </Button>
            <Button
              type="button"
              title="Delete a Car"
              onClick={(e) => removeCar(e)}
            >
              Delete
            </Button>
          </FormGroup>
        </Form>
      </Container>
    </div>
  );
};

export default EditCarList;
