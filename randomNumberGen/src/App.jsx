import { useState } from "react";
import "./App.css";

function App() {
  const [random, setRandom] = useState(0);
  const [max, setMax] = useState(10);
  const [min, setMin] = useState(0);

  const giveRandom = () => {
    setRandom(Math.floor(Math.random() * (max - min + 1) + min));
  };

  return (
    <div className="App">
      <div className="container">
        <div className="header">Think of a Number</div>
        <div className="randomNum">
          <p>
            Random Number: <span>{random}</span>
          </p>
        </div>
        <div className="NumContainer">
          <div>
            <p>Min:</p>
            <input
              type="number"
              value={min}
              onChange={e => setMin(Number(e.target.value))}
            />
          </div>
          <div>
            <p>Max:</p>
            <input
              type="number"
              value={max}
              onChange={e => setMax(Number(e.target.value))}
            />
          </div>
        </div>
        <button className="randomBtn" onClick={giveRandom}>
          Get Random Number
        </button>
      </div>
    </div>
  );
}

export default App;
