import Lamborghini from "./images/Lamborghini.jpg";

function Car() {
  return <img src={Lamborghini} alt="Lamborghini" />;
}

export default function Gallery() {
  return (
    <section>
      <h1>Nice Car!</h1>
      <Car />
      <Car />
      <Car />
    </section>
  );
}
