import React from "react";

function App() {
  const [numbers, setNumbers] = React.useState([1, 2, 3])

  const addNumber = () => {
    const randNumber = Math.round(Math.random() * 10)
    setNumbers([...numbers, randNumber])
  }

  return (
    <div className="App">
      <ul>
        {numbers.map((num, index) => (
          <li key = {index}>{num}</li>
        ))}
      </ul>
      <button onClick={addNumber}>новое число</button>
    </div>
  );
}

export default App;
