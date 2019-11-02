import React, { useState } from "react";
import "./LSU.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AllPerson from "./AllPerson";
import NewPerson from "./NewPerson";
import uuid from "uuid/v1";


function App() {
    const initialData = [
      { id: uuid(), name: "Simone" },
      { id: uuid(), name: "Karina" },
      { id: uuid(), name: "Leonora" }
    ];

    const [person, setPerson] = useState(initialData)
    const [newPerson, setNewPerson] = useState({id: "", name: "" });
    console.log(person)
  
    const addPerson = p => {
      if (p.id === "") {
        p.id = uuid();
        person.push(p);
      } else {
        let editPerson = person.find(pp => pp.id === p.id);
        editPerson.name = p.name;
      }
      setPerson([...person])
      setNewPerson({id: "" , name: ""})
    };
  
    const deletePerson = index => {}// it wont work - it removes everything 
  
    const editPerson = index => {
      let editPerson = person.find(p => p.id === index);
      setNewPerson(editPerson)
    };
  
    return (
      <div className="container outer">
        <h2 style={{ textAlign: "center", marginBottom: 25 }}>
          Lifting state up 2
        </h2>
  
        <div className="row">
          <div className="col-6 allTodos">
            <AllPerson person={person} editPerson={editPerson} deletePerson={deletePerson} />
          </div>
          <div className="col-5 new-todo">
            <NewPerson addPerson={addPerson} nextPerson={newPerson} />
          </div>
        </div>
      </div>
    );
  }
  export default App;
  




