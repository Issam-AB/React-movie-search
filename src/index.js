import React, { Component } from "react";
import ReactDOM from "react-dom";
import SearchMovies from "./searchMovie";
import "./style.css";

class Main extends React.Component {
  render() {
    return (
      <div className="container">
        <h1 className="title">React movie search!</h1>
        <SearchMovies />
      </div>
    );
  }
}

ReactDOM.render(<Main />, document.getElementById("root"));
