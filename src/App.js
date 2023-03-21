import React, { useEffect, useState } from 'react';
import "./style.css";

export default function App() {
  const [value, setValue] = useState ('Текст в инпуте')

  return (
    <div className="App">
    <Counter/>
  </div>
  );
}
export default App;