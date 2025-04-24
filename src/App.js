import Gallery from "./Gallery";

function Card({ children }) {
  return <div className="card">{children}</div>;
}

export default function Profile() {
  return (
    <Card>
      <h1> Nice Car!</h1>
      <Gallery
        size={500}
        cars={{
          name: "Lamborghini 1",
          imageId: "1",
        }}
      />
    </Card>
  );
}
