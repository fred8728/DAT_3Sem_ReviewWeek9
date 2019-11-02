import React from 'react';
import PropTypes from 'prop-types';

const AllPerson = ({ person , deletePerson, editPerson}) => {
    return (
      <div>
        <h2>All Persons</h2>
        <ul>
            {person.map(p => (
                <li key={p.id}>{p.name}  
                <a href="#/" onClick= {(e)=>e.preventDefault(),deletePerson(p.id)}> (delete </a> 
                <a href="#/" onClick= {()=>editPerson(p.id)}>, edit) </a>
                </li>
            ))}
        </ul>
      </div>
    );
  };
  export default AllPerson;
  
  AllPerson.propTypes ={
      person: PropTypes.array
  }