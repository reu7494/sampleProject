import { useState, useEffect } from "react";
import { sculptureList } from "./data.js";

export default function Gallery() {
  const [index, setIndex] = useState(0);
  const [showMore, setShowMore] = useState(false);

  function handlePreviousClick() {
    setIndex(index === 0 ? 11 : index - 1);
  }

  function handleNextClick() {
    setIndex(index === 11 ? 0 : index + 1);
  }

  function handleMoreClick() {
    setShowMore(!showMore);
  }

  useEffect(() => {
    console.log("Updated index:", index);
  }, [index]);

  let sculpture = sculptureList[index];
  return (
    <>
      <button onClick={handleNextClick}>Next</button>
      <button onClick={handlePreviousClick}>Previous</button>
      <h2>
        <i>{sculpture.name} </i>
        by {sculpture.artist}
      </h2>
      <h3>
        ({index + 1} of {sculptureList.length})
      </h3>
      <button onClick={handleMoreClick}>
        {showMore ? "Hide" : "Show"} details
      </button>
      {showMore && <p>{sculpture.description}</p>}
      <img src={sculpture.url} alt={sculpture.alt} />
    </>
  );
}
