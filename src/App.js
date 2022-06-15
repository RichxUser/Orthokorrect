import React from "react";
import { BrowserRouter } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage";
import "./App.css"

function App() {
  return (
    <div>
      <BrowserRouter >
      <Homepage />
      </BrowserRouter>
    </div>
  );
}

export default App;
