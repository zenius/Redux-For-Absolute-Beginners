import React, { Component } from "react";

export default class ExampleComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        { title: "React Redux Tutorial for Beginners", id: 1 },
        { title: "Redux e React: cos'è Redux e come usarlo con React", id: 2 }
      ]
    };
  }

  render() {
    const { articles } = this.state;

    // console.log(articles);
    return (
      <ul>
        {articles.map(obj => (
          <li key={obj.id}>{obj.title}</li>
        ))}
      </ul>
    );
  }
}
