import React from "react";
import "./App.css";
import logo from "./logo.svg";
import { RefreshButton } from "@redreamerlab/uikit";

// console.log(add(1, 2));
// console.log(minus(222, 111));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>6667</div>
        <RefreshButton onRefresh={() => {}} />
        {/* <Body>
          <div>123123213</div>
        </Body> */}
      </header>
    </div>
  );
}

export default App;
