import React from "react";
import ReactDOM from "react-dom/client";
import spanishNumbers from "./SpanishNumbers.js";
const App = () => {
  const [numbers, setNumbers] = React.useState(spanishNumbers); // Numbers- Spanish Numbers in "text" type
  const [randomizedNumber, setRandomizedNumber] = React.useState(0); // So this is the main number. Student can say this number.
  const [on, isOn] = React.useState(false);
  let randomNumber;
  const showNumber = () => {
    randomNumber = Math.floor(Math.random() * 99 + 1);
    setRandomizedNumber((prevState) => numbers[randomNumber].spanish);
  };
  return <h1 onClick={showNumber}>{randomizedNumber}</h1>;
};

export default App;
