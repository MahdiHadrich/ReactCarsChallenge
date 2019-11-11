import React from "react";

const Car = ({ picturePath, model, brand, pricePerDay, pricePerKm, price }) => (
  <div className="car">
    <img alt={model} src={picturePath} />
    <div className="info">
      <h4>
        {brand} {model}
      </h4>
      <span>Price Per Day: {pricePerDay / 100}€</span>
      <span>Price Per Km: {pricePerKm / 100}€</span>
      <span>Rent Price : {price}€</span>
    </div>
  </div>
);

export default Car;
