import  { useState } from "react";
import MyInput from "./components/MyInput";
import Container from "./components/Container";
import "./App.css";

function App() {
  const [color, setColor] = useState("");

  const handleColorChange = (newColor) => {
    setColor(newColor);
  };

  return (
    <div className="App">
      <MyInput color={color} onColorChange={handleColorChange} />
      <Container color={color} />
    </div>
  );
}

export default App;
