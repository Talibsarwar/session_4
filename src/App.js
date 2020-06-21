import React, {useState} from 'react';
import './App.css';
import {Message} from './Message.js';

function App() {
  let [count, setCount] = useState(0);
  let[isMorning, setMorning] = useState(false);
  return (
    <div className={`box ${isMorning ? 'dayLight' : ''}`}>
      <h1>Have A Good {isMorning ? 'Morning' : 'Night'}</h1>
      <Message counter={count}/>
      <br />
      <button onClick={()=> setCount(++count)}>Update Counter</button>
      <button onClick={()=>setMorning(!isMorning)}>Update Day</button>
    </div>
  );
}

export default App;
