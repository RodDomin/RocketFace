import React, { Component } from "react";
import Header from "./Components/header";
import Posts from "./Components/Posts";
import "./App.css";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Posts />
      </>
    );
  }
}

export default App;
