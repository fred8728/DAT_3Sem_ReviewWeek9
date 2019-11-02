import React, { useState } from "react";
 
function NumberList({ numbers }) {
  console.log("--NUMBERS -->",numbers)
  const listItems = numbers.map(n => 
       <li key ={n.toString()}>{n}</li> //Added key here and changed from p to li to get the dots
  );
  return listItems;
}

function ListDemo(props) {
  console.log(props.numbers)
  
  return (
    <div>
      <h2>All numbers passed in via props</h2>
      <NumberList numbers={props.numbers} />
    </div>
  );
}
export default function App() {
  const [numbers] = useState([1, 2, 3, 4]);
  return <ListDemo numbers={numbers} />;
}


  