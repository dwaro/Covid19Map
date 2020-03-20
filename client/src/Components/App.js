import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./Home";
import Header from "./Header";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Header} />
      <Route exact path="/" component={Home} />
    </BrowserRouter>
  );
}

export default App;
