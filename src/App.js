import React, { useEffect, useState } from 'react';
import Counter from "./components/Counter"
import ClassCounter from "./components/Counter"
import "./style.css";

export default function App() {
  const [value, setValue] = useState ('Текст в инпуте')

  return (
    <div className="App">
      <div className="post">
        <div className="post__content">
          <strong>1. Javascript</strong>
          <div>
            Javascript - язык программирования.
          </div>
          </div>
          <button>Удалить</button>
      </div>
  </div>
  );
}
export default App;