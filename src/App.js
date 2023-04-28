import React from "react";
import NotFound from "./components/NotFound/NotFound";
import Homepage from "./components/Homepage/Homepage";
import Uploader from "./components/Uploader/Uploader";
import NotreAgence from "./components/NotreAgence/NotreAgence";
import ServiceTraduction from "./components/ServiceTraduction/ServiceTraduction";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/Uploader" element={<Uploader />}></Route>
          <Route path="/NotreAgence" element={<NotreAgence />}></Route>
          <Route path="/ServiceTraduction" element={<ServiceTraduction />}></Route>
          <Route path="*" element={<NotFound />} /></Routes>
      </Router>
    </div>
  );
}

export default App;
