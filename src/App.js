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
      <button onClick={onPlay}>Play Movie</button>
      <button onClick={onUpload}>Upload Image</button>
    </>
  );
}
