import React from "react";
import Person, {males, females} from "./File2";

function getPerson(props) {
  const {firstName, email} = Person
  return <p>Firstname: {Person.firstName} Email: {Person.email}</p>
   
  }

export default getPerson;

let concatArray = males.concat(females);
console.log(concatArray);

concatArray.splice(2, 0, "Kurt");
concatArray.splice(3, 0, "Helle");
concatArray.push("Tina");
console.log(concatArray);

