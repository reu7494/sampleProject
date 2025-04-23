import Lamborghini from "./images/Lamborghini.jpg";

const Cars = {
  name: "Lamborghini",
  imageSize: "s",
  theme: {
    backgroundColor: "black",
    color: "red",
  },
};

function Car() {
  return <img src={Lamborghini} alt="Lamborghini" />;
}

export default function Gallery() {
  return (
    <div style={Cars.theme}>
      <h1>{Cars.name} is Nice Car!</h1>
      <Car />
      <Car />
    </div>
  );
}
