import React from "react";

const Car = ({ picturePath, model, brand, pricePerDay, pricePerKm }) => (
  <div className="car">
    <img alt={model} src={picturePath} />
    <div className="info">
      <h4>
        {brand} {model}
      </h4>
      <span>Price Per Day: {pricePerDay}€</span>
      <span>Price Per Km: {pricePerKm}€</span>
    </div>
  </div>
);

export default Car;
