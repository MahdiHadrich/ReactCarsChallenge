const getRentPrice = (distance: number, duration: number, car): number => {
  const { pricePerKm, pricePerDay } = car;
  const price = (distance * pricePerKm) / 100 + (duration * pricePerDay) / 100;
  const roundedPrice = Math.round(price * 100) / 100;
  return roundedPrice;
};

export default getRentPrice;
