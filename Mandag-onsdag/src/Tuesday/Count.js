import React, { useState, useEffect } from 'react';

function Count(props) {

  //Getter and setter
  const [count, setCount] = useState(props.count);

  //Using useEffekt to storage the number in client page
  useEffect(() =>{
    localStorage.setItem("count", count)
  })

  //Getting the saved number and putting it into paragraf under
  let saved = localStorage.getItem("count");

  return (
    <div>
      <p>You clicked {saved} times</p>

      <button onClick={() => setCount(count + 1)}>
      Increment
      </button>
      
      <button onClick={() => setCount(count -1)}> 
      Decrement 
      </button>
    </div>
  );
}

function StartCount(){
  //The counter starts at 0 - change the 0 for another starting point
  return <Count count ={0}/>
}

  export default StartCount;