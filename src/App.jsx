import React from "react";
import ReactDOM from "react-dom/client";
import spanishNumbers from "./SpanishNumbers.js";
const App = () => {
  const [numbers, setNumbers] = React.useState(spanishNumbers);
  const [on, isOn] = React.useState(false);

  return <h1>Hello, World</h1>;
};

export default App;
