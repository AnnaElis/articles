import React, { useEffect, useState } from 'react';
import "./style.css";

export default function App() {
  const [likes, setLikes] = useState (0)
  const [value, setValue] = useState ('Текст в инпуте')
function increment () {
setLikes (value, likes + 1)
 }
function decrement () {
 setLikes (value, likes + 1)
}
  return (
    <div className="App">
    <h1>{value}</h1>
    <h1>{likes}</h1>
    <input type="text" 
    value={value} 
    onChange={event => setValue(event.target.value)}
    />
   <button onClick={increment}>Increment</button>
   <button onClick={decrement}>Decrement</button>
  </div>
  );
}
