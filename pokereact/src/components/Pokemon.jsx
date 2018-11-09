import React, { Component } from "react";
import axios from "axios";

class Pokemon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      infoPokemon: []
    };
  }

  componentDidMount() {
    const api = axios;
    let pokemonInfo = [];

    api
      .create({
        baseURL: "https://api.pokemontcg.io/v1/",
        timeout: 7000
      })
      .get(`cards?name=${this.props.name}`)
      .then(response => {
        let attack = [];
        if (response.data.cards[0].attacks === undefined) {
          attack = "Attack is not available";
        } else {
          response.data.cards[0].attacks.map(att => {
            attack.push(att.name);
          });
          attack = attack.join(", ");
        }
        pokemonInfo.push({
          imagePath: response.data.cards[0].imageUrl,
          attacks: attack
        });
        this.setState({ infoPokemon: pokemonInfo });
      })
      .catch(error => {
        console.log(`The API Pokemon encountered a problem: ${error}`);
      });
  }

  render() {
    return (
      <div className="col-4 text-center py-5">
        {this.state.infoPokemon.map(properties => {
          return (
            <div key={this.props.id}>
              <h2>{this.props.name}</h2>
              <img src={properties.imagePath} alt={this.props.name} />
              <h5>Attacks : {properties.attacks}</h5>
            </div>
          );
        })}
      </div>
    );
  }
}

export default Pokemon;
