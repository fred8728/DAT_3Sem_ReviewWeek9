import React, { useState, useEffect } from "react";

export default function SearchResults() {
  const [todo, setTodo] = useState({ title: "" });
  const [id, setId] = useState(1);

  const [chuck, setChuck] = useState({value: " "});
  // const [dad, setDad] = useState({value: ""});
  const [chuckSelector, setChuckSelector] = useState(false);

  useEffect(() => {
    function fetchTodo() {
      console.log("Fetching")
      fetch('https://jsonplaceholder.typicode.com/todos/'+id)
      .then(res=>res.json())
      .then(data =>  setTodo(data))  
      .catch(err => console.log("Ups"+err))
    }
    fetchTodo();
  },[id]);

    useEffect(() => {
    function fetchChuckNorris(){
      fetch('https://api.chucknorris.io/jokes/random')
      .then(res=>res.json())
      .then(data=> {setChuck(data);})
      .catch(err =>console.log("Ups Chuck Error"+err))
  }
  fetchChuckNorris()

  },[chuckSelector]);

  return (
    <>
      <input value={id} onChange={e => setId(e.target.value)} />
      
      <p> Name: {todo.title} /</p>
      <p>Joke: {chuck.value}</p>
      <button onClick={()=>setChuckSelector(!chuckSelector)}>Get Chuck norris Joke</button>
    </>
  );
}