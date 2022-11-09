// Imported React libraries.
import React, { useState } from "react";
// Imported stylesheet.
import "./App.css";
// Imported components.
import CarInformation from "./Components/CarInformation";
import EditCarList from "./Components/EditCarList";
//import instrustions component
import Instructions from "./Components/Instructions"



const App = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
    <h1 style={{textAlign:'center'}}>Car Database</h1>
    <div className="instructions">
      <Instructions />
    </div>
     
      <div className="App">
        {/* react bootstrap */}
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
          integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh"
          crossOrigin="anonymous"
        ></link>
        
        <div className="container">
          <EditCarList />
          <CarInformation />
         
        </div>
      
      </div>
    </>
  );
};

// Exported App.js to index.js.
export default App;

