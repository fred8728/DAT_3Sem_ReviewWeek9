import React from "react";
import PropTypes from "prop-types";
import { names } from "./File2";

function Welcome(props) {
  return <p>Hello, {props.name}</p>;
}

function WelcomePerson(props) {
  return <p> Hello, {props.person.firstName} {props.person.lastName} {props.person.email}</p>;
}

function App() {
  return (
    <div>
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
      <WelcomePerson person={names[0]} />
      <WelcomePerson person={names[1]} />
      <WelcomePerson person={names[2]} />
    </div>
  );
}

Welcome.propTypes = {
  name: PropTypes.string
};

WelcomePerson.propTypes = {
  firstname : PropTypes.string.isRequired
}

export default App;