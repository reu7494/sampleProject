import Car from "./images/Lamborghini.jpg";

function Cars({ name, size = 70 }) {
  return (
    <div>
      <h1>{name} is Nice Car!</h1>
      <img src={Car} alt={name} width={size} height={size} />
    </div>
  );
}

export default function Image() {
  return <Cars name="Lamborghini" />;
}
