import React from "react";

const CountryTable = props => {
  const {labels, countries} = props

  //NOTICE !!!
  //Put this below in <tr></tr> - it wont work for some reason
  /*{labels.map((label, index) => 
  <th key={index}>{label}</th>
  )}*/

    return (
      <div>
      <table className="table">
        
      <thead>
          <tr>
           <th>Name:</th> 
           <th>Capital:</th> 
           <th>Region:</th> 
           <th>Population:</th> 
           <th>Area:</th> 
           <th>TimeZones:</th> 
           <th>Borders:</th> 
           <th>Top Level Domain:</th> 
           <th>Currencies: </th> 
           <th>Languages:</th> 
          </tr>
        </thead>

        <tbody>
          {countries.map((c =>
           <tr key={c.name}>
             <td>{c.name}</td>
             <td>{c.capital}</td>
             <td>{c.region}</td>
             <td>{c.population}</td>
             <td>{c.area}</td>
             <td>{c.timezones[0]}</td>
             <td>{c.borders[0]}</td>
             <td>{c.topLevelDomain[0]}</td>
             <td>{c.currencies[0]}</td>
             <td>{c.languages[0]}</td>
           </tr> 
            ))}
        </tbody>
      </table>
      </div>
    );
};
export default CountryTable;