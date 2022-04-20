import React from "react";
import logo from "./logo.svg";
import "./App.css";

chrome.contextMenus.create(
  {
    title: "Create new #TIL?",
    onclick: (info: chrome.contextMenus.OnClickData) => {
      console.log(info);
    },
  },
  () => {}
);

function App() {
  return (
    <div className="App">
      <header className="App-header">Header</header>
      <main>Hello Main</main>
    </div>
  );
}

export default App;
