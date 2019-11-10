import React, { useState, useEffect } from "react";
import axios from "axios";

import Car from "./Car";

const ListOfCars = () => {
  const [cars, setCars] = useState([]);
  useEffect(() => {
    const url = `http://localhost:3001/cars.json`;

    axios
      .get(url)
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="wrapper">
        {cars && cars.map(car => <Car key={car.id} {...car} />)}
      </div>
    </div>
  );
};

export default ListOfCars;
