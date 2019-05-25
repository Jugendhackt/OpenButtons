import React from "react";
import { render } from "react-dom";
const { dialog } = require("electron").remote;

const App = props => {
  return (
    <button
      onClick={() => {
        dialog.showOpenDialog({
          properties: ["openFile", "openDirectory", "multiSelections"]
        });
      }}
    >
      Random Text
    </button>
  );
};

render(<App />, window.document.getElementById("root"));
