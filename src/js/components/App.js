import React from "react";
import List from "./List";
import Form from "./Form";

const App = () => (
  <div style={{ margin: "1em" }}>
    <div>
      <h2>Articles</h2>
      <List />
    </div>
    <div>
      <h2>Add a new article</h2>
      <Form />
    </div>
  </div>
);

export default App;
