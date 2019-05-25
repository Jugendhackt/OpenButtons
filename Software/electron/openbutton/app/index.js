import React from "react";
import { render } from "react-dom";
const { dialog } = require("electron").remote;
import { MemoryRouter, Route } from "react-router";
import Home from "./pages/Home";
const App = props => {
  return (
    <MemoryRouter>
      <Route exact path="/" render={() => <Home />} />
    </MemoryRouter>
  );
};

render(<App />, window.document.getElementById("root"));
