import * as React from "react";
import ReactDom from "react-dom";

import "./index.css";

import App from "./App";

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("reactAnchor");

  ReactDom.render(<App />, container);
});
