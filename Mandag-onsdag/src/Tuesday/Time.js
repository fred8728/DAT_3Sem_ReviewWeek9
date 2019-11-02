import React, {useState, useEffect} from 'react';

function GetTime() {
  const[time, setTime] = useState(currentTime);
  const[runTime, setRunTime] = useState(true);

  useEffect(() => {
    if(runTime === false) {
      return
    }

    const clear = setInterval(()=> {
      setTime(currentTime);
    }, 1000)

    return() => {
      clearInterval(clear)
    }
  },[runTime])

  return <p>Time is: {time}</p>
}

function currentTime() {
    const date = new Date();
    return date.toLocaleTimeString()
}

export default GetTime;