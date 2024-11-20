import { useState } from 'react';
import './App.css';


function App() {
  const [fruit, setFruit] = useState('')
    fetch("http://localhost:3001")
      .then(response => response.text())
      .then(data => {setFruit(data)})
      .catch(error => console.error('Fetch error:', error))

  return (
    <div className="App">
      <div>{fruit}</div>
    </div>
  );
}

export default App;
