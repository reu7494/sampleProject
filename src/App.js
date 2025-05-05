import { useState } from "react";

export default function Form() {
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  function handleFirstNameChange(e) {
    setFirstName = e.target.value;
  }

  function handleLastNameChange(e) {
    setLastName = e.target.value;
  }

  function handleReset() {
    firstName = null;
    lastName = null;
  }

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <input
        placeholder="First name"
        value={firstName}
        onChange={handleFirstNameChange}
      />
      <input
        placeholder="Last name"
        value={lastName}
        onChange={handleLastNameChange}
      />
      <h1>
        Hi, {setFirstName} {setLastName}
      </h1>
      <button onClick={handleReset}>Reset</button>
    </form>
  );
}
