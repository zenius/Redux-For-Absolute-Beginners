import React, { Component } from "react";
import ReactDOM from "react-dom";
import ExampleComponent from "./ExampleComponent";
import index from "./js/index";

ReactDOM.render(<ExampleComponent />, document.getElementById("app"));

if (module.hot) {
  module.hot.accept();
}
