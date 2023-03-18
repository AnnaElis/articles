import React, { useEffect, useState } from 'react';
import "./style.css";

export default function App() {
  const [likes, setLikes] = useState (0)
function increment () {
setLikes (value, likes + 1)
 }
function decrement () {
 setLikes (value, likes + 1)
}
  return (
    <div className="App">
    <h1>{likes}</h1>
   <button onClick={increment}>Increment</button>
   <button onClick={decrement}>Decrement</button>
  </div>
  );
}
