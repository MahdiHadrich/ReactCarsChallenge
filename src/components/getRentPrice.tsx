const getRentPrice = (distance: number, duration: number, car): number => {
  const { pricePerKm, pricePerDay } = car;
  let coefficient = 1;
  if (duration > 10) {
    coefficient = 0.5;
  } else if (duration > 4) {
    coefficient = 0.7;
  } else if (duration > 1) {
    coefficient = 0.9;
  }

  const price =
    ((distance * pricePerKm) / 100 + (duration * pricePerDay) / 100) *
    coefficient;
  const roundedPrice = Math.round(price * 100) / 100;
  return roundedPrice;
};

export default getRentPrice;
