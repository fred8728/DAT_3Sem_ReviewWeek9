import React, { useState , useEffect} from "react";

export default function AddEditPerson(props) {
  const [person, setPerson] = useState({ ...props.newPerson });
  const emptyPerson = { id: "", age: "", name: "", email: "", gender: "" };
  const newPerson = props.newPerson;
  const { addEditPerson } = props;

  const handleChange = (evt) => {
    const target = evt.target;
    const id = target.id;
    const value = target.value;
    setPerson({...person, [id]: value});
  }
  
  const handleSubmit = (evt) => {
    evt.preventDefault();
    if(person.age === "" || person.name === "" || person.gender === "" || person.email === ""){
      return window.alert("Please fill out the black")
    } 
    addEditPerson(person);
    setPerson({...emptyPerson})
    
  }

  useEffect(
    () =>
      setPerson({...newPerson}),[newPerson]
  ); 

  return (
    <div>
      <form className="form-horizontal" onChange={handleChange} onSubmit={handleSubmit} >
        <div className="form-group">
          <label className="control-label col-sm-3">Id:</label>
          <div className="col-sm-9">
            <input className="form-control" readOnly id="id" />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="name">
            Name:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="name"
              value={person.name}
              placeholder="Enter Name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="age">
            Age:
          </label>
          <div className="col-sm-9">
            <input
              type="number"
              className="form-control"
              id="age"
              value={person.age}
              placeholder="Enter age"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="email">
            Email:
          </label>
          <div className="col-sm-9">
            <input
              type="email"
              className="form-control"
              id="email"
              value={person.email}
              placeholder="Enter email"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <label className="control-label col-sm-3" htmlFor="pwd">
            Gender:
          </label>
          <div className="col-sm-9">
            <input
              className="form-control"
              id="gender"
              value={person.gender}
              placeholder="Enter Gender"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="form-group">
          <div className="col-sm-offset-3 col-sm-9">
            <button type="submit" className="btn btn-primary" onSubmit={handleSubmit}>
              Submit
            </button>
            <button
              style={{ marginLeft: 5 }}
              type="button"
              className="btn btn-dark"
            >
              Cancel
            </button>
          </div>
        </div>
      </form>
      <p>{JSON.stringify(person)}</p>
    </div>
  );
}
