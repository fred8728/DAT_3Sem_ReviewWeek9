import React, { useState } from "react";

const NameForm = () => {
  const initialState = { name: "" };
  const [name, setName] = useState(initialState);

  function handleChange(event) {
    const target = event.target;
    const id = target.id;
    const value = target.value;
    setName({ ...name, [id]: value }); //creates a clone of name
  }

  function handleSubmit(event) {
    event.preventDefault();
    window.alert(JSON.stringify(name)); // wont show alert
    setName(initialState);
  }

  return (
    <div>
      <form onSubmit={handleSubmit} onChange={handleChange}> 
        <label>
          <input
            id="name"
            type="text"
            value={name.value}
            placeholder="Type your name here:"
          />
        </label>
        <input type="submit" value="Submit" onSubmit={handleSubmit} />
      </form>
      <p>{JSON.stringify(name)}</p>
    </div>
  );
};

export default function FormDemo() {
  return (
    <div style={{ marginTop: 25 }}>
      <NameForm />
    </div>
  );
}
