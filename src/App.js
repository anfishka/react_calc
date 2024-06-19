import car from "./bg.png";
import React, { useState } from "react";
import "./App.css";

function App() {
  const [getFuelConsuption, setFuelConsuption] = useState(0);
  const [getDistance, setDistance] = useState(0);
  const [getResult, setResult] = useState(null)
  const [getError, setError] = useState("")

  function findFuelConsumption(fuelConsuption, distance)
  {
    if (isNaN(getFuelConsuption) || isNaN(distance) || getFuelConsuption < 0 || getDistance < 0)
    {
      setError("Пожалуйста, введите корректные положительные значения")
      return null;
      }
    let res = (fuelConsuption * distance) / 100;
    setError("")
    return res
  }
  return (
    <div className="App">
      <img src={car} alt="car"/>
      <div className="calculator_container">
        <p className="title">Калькулятор расхода топлива</p>
        

        <p>Средний расход топлива (литров / 100 км)</p>
        <input value={getFuelConsuption} type="number" inputMode="numeric" onChange={e => setFuelConsuption(parseFloat(e.target.value))}/>

        <p>Пройденное расстояние (км)</p>
        <input value={getDistance} type="number" inputMode="numeric" onChange={e => setDistance(parseFloat(e.target.value))}></input>
        <button onClick={()=>setResult(findFuelConsumption(getFuelConsuption, getDistance))}>Рассчитать</button>
        {getError && <p className="error">{getError}</p>}
        {getResult != null &&   <p>Результат: {getResult} литров</p>}
      </div>
    </div>
  );
}

export default App;

