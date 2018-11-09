import React, { Component } from "react";
import "./App.css";
import PokemonList from "./components/PokemonList";

class App extends Component {
  constructor() {
    super();
    this.state = {
      page: 1,
      changePage: false
    };
    this.changePageUp = this.changePageUp.bind(this);
    this.changePageDown = this.changePageDown.bind(this);
  }

  changePageUp() {
    if (this.state.page + 1 < 5) {
      this.setState({ page: this.state.page + 1, changePage: true });
    }
  }

  changePageDown() {
    if (this.state.page - 1 > 0) {
      this.setState({ page: this.state.page - 1 });
    }
  }

  render() {
    return (
      <div className="container-fluid">
        <h1 className="text-center">My Pokemon Universe !!</h1>
        <PokemonList
          page={this.state.page}
          changePage={this.state.changePage}
        />
        <div className="row justify-content-center pb-3">
          <button
            className="buttonDown"
            onClick={() => {
              this.changePageDown();
            }}
          >
            &#8918;
          </button>
          <button
            className="buttonUp"
            onClick={() => {
              this.changePageUp();
            }}
          >
            &#8919;
          </button>
        </div>
      </div>
    );
  }
}

export default App;
