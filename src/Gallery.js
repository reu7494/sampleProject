import Lamborghini from "./images/Lamborghini.jpg";

export default function Gallery({ cars, size }) {
  return (
    <img
      src={Lamborghini}
      alt="Lamborghini"
      carname={cars.name}
      width={size}
      height={size}
    />
  );
}
