import React, { useState, useEffect } from "react";
import CountryTable from "./CountryTable";
import "./App.css";

const App = (props) => {
  const factory = props.factory;
  const [countries, setCountries] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    factory.getLabels()
    .then(res => res.json)
    .then(label => {
      setLabels(label);})
  }, []);

  useEffect(() => {
    factory.getCountries()
    .then(country => {
        setCountries(country);})
  },[]);

  return (
    <div>
      <div className="App-header">
        <h2>React, State, Fetch</h2>
      </div>
      <div className="App-intro">
        <CountryTable labels={labels} countries={countries} />
      </div>
    </div>
  );
};

export default App;
