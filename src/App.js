function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}

function PlayButton({ movieName }) {
  return (
    <Button onClick={() => alert(`Playing ${movieName}`)}>
      Play {movieName}
    </Button>
  );
}

function UploadButton() {
  return <Button onClick={() => alert("Uploading")}>Upload Image</Button>;
}

export default function Toolbar() {
  return (
    <div>
      <PlayButton movieName="Kiki's Delivery Service"></PlayButton>
      <UploadButton />
    </div>
  );
}
