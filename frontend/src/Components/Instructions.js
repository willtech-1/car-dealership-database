import React from "react"

const Instructions = () => {
  // instruction about how to do all the Database CRUD Instructions
  return (
    <ul className="instructions-wrapper">
      <h5>Car Database CRUD Instructions</h5>
      <li>
        To <b>CREATE</b> a new car enter the model, make, owner,
        registration, address and previous owners into the input fields and
        Click on the "<b>Add</b>" button.
      </li>
      <li>
        To <b>UPDATE SINGLE CAR</b> enter the ID of the car you wish to update and you can change model, make, owner, registration and then Click on the "<b> Update</b>" button to update.
      </li>
      <li>
        To <b>UPDATE MORE THAN ONE CAR</b> enter the <b>Model</b> year and make the changes that you wish and Click on the "<b> X 2 Update</b>"
        button, cars with the same model year will be updated.
      </li>
      <li>
        To <b>DELETE A CAR</b> enter the ID of the car
        that you wish to remove and Click on the "<b>Delete</b>" button.
      </li>

    </ul>
  );
};

export default Instructions;
