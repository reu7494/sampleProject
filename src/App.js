export default function App() {
  return (
    <MyButton
      onPlay={() => alert("Playing")}
      onUpload={() => alert("Upload")}
    />
  );
}

function MyButton({ onPlay, onUpload }) {
  return (
    <>
      <Button onClick={onPlay}>Play Movie</Button>
      <Button onClick={onUpload}>Upload Image</Button>
    </>
  );
}

function Button({ onClick, children }) {
  return <button onClick={onClick}>{children}</button>;
}
