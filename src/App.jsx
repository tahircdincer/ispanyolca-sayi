import React from "react";
import ReactDOM from "react-dom/client";
import img from "./img/Spain-flag.jpg";
import spanishNumbers from "./SpanishNumbers.js";
const App = () => {
  const [numbers, setNumbers] = React.useState(spanishNumbers); // Numbers- Spanish Numbers in "text" type
  // So this is the main number. Student can say this number.
  const [random, setRandom] = React.useState(0);
  const [on, setOn] = React.useState(false);

  const generateNumber = () => {
    setRandom((prevState) => Math.floor(Math.random() * 99 + 1));
  };

  const toggleNumber = () => {
    setOn((prevState) => !prevState);
  };

  return (
    <main className="numbers__container">
      <img src={img} alt="Spanish flag" />
      <h1>{numbers[random].number}</h1>

      <div className="numbers__buttons">
        <button onClick={generateNumber}>Numara Ver</button>
        <button onClick={toggleNumber}>Bu Neydi Şimdi?</button>
      </div>
      <h2 className={on ? "on" : "off"}> {numbers[random].spanish}</h2>
    </main>
  );
};

export default App;
