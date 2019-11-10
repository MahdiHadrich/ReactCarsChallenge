import React from "react";
import ListOfCars from "./components/ListOfCars";

const App = () => {
  return (
    <div>
      <div className="header">
        <h2>RentACar</h2>
      </div>
      <ListOfCars />
    </div>
  );
};

export default App;
