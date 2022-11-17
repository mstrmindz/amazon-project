import React from "react";
import "./App.css";
import Header from "./Header";

import Main from "./Main";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Checkout from "./checkout";

function App() {
  return (
    // BEM
    <Router>
      <div className="App">
        <Routes>
          <Route path="/CHECKOUT" element={<Checkout />} />

          <Route path="/" element={<Main />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
