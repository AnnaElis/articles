import React, { useEffect, useState } from 'react';
import Counter from "./components/Counter";
import ClassCounter from "./components/Counter";
import PostItem from "./components/PostItem";
import "./style.css";
import "./styles/app.css";

export default function App() {
  const [value, setValue] = useState ('Текст в инпуте')

  return (
    <div className="App">
  <PostItem post={{id:1, title: "Javascript", body: "Description"}}/>
  </div>
  );
}
export default App;