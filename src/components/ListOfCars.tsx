import React, { useState, useEffect } from "react";
import axios from "axios";
import Car from "./Car";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import Input from "@material-ui/core/Input";
import getRentPrice from "./getRentPrice";

const ListOfCars = () => {
  const [cars, setCars] = useState([]);
  const [distance, setDistance] = React.useState<
    number | string | Array<number | string>
  >(50);
  const [duration, setDuration] = React.useState<
    number | string | Array<number | string>
  >(1);

  useEffect(() => {
    const url = `http://localhost:3001/cars.json?duration=${duration}&distance=${distance}`;

    axios
      .get(url)
      .then(response => {
        setCars(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [distance, duration]);

  const handleDistanceSliderChange = (
    event: any,
    newValue: number | number[]
  ) => {
    setDistance(newValue);
  };

  const handleDistanceInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDistance(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleDurationSliderChange = (
    event: any,
    newValue: number | number[]
  ) => {
    setDuration(newValue);
  };

  const handleDurationInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setDuration(event.target.value === "" ? "" : Number(event.target.value));
  };

  const handleDistanceBlur = () => {
    if (distance < 50) {
      setDistance(50);
    } else if (distance > 3000) {
      setDistance(3000);
    }
  };

  const handleDurationBlur = () => {
    if (duration < 1) {
      setDuration(1);
    } else if (duration > 30) {
      setDuration(30);
    }
  };

  const rentPrice = cars.map(car => ({
    ...car,
    price: getRentPrice(distance, duration, car)
  }));

  return (
    <div>
      <div className="slider">
        <Typography id="input-slider" gutterBottom>
          Distance (in km) :
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              defaultValue={50}
              value={typeof distance === "number" ? distance : 0}
              onChange={handleDistanceSliderChange}
              aria-labelledby="input-slider"
              step={50}
              min={50}
              max={3000}
            />
          </Grid>
          <Grid item>
            <Input
              className="sliderInput"
              value={distance}
              margin="dense"
              onChange={handleDistanceInputChange}
              onBlur={handleDistanceBlur}
              inputProps={{
                step: 50,
                min: 50,
                max: 3000,
                type: "number",
                "aria-labelledby": "input-slider"
              }}
            />
          </Grid>
        </Grid>

        <Typography id="input-slider" gutterBottom>
          Duration (in days) :
        </Typography>
        <Grid container spacing={2} alignItems="center">
          <Grid item xs>
            <Slider
              defaultValue={1}
              value={typeof duration === "number" ? duration : 0}
              onChange={handleDurationSliderChange}
              aria-labelledby="input-slider"
              step={1}
              min={1}
              max={30}
            />
          </Grid>
          <Grid item>
            <Input
              className="sliderInput"
              value={duration}
              margin="dense"
              onChange={handleDurationInputChange}
              onBlur={handleDurationBlur}
              inputProps={{
                step: 10,
                min: 1,
                max: 30,
                type: "number",
                "aria-labelledby": "input-slider"
              }}
            />
          </Grid>
        </Grid>
      </div>

      <div className="wrapper">
        {rentPrice && rentPrice.map(car => <Car key={car.id} {...car} />)}
      </div>
    </div>
  );
};

export default ListOfCars;
