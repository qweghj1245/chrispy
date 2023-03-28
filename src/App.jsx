import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { Footer } from "@qweghj1245/chrispy-ch";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Footer title="testfooter" />
      </header>
    </div>
  );
}

export default App;
