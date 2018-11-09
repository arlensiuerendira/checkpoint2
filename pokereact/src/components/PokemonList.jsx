import React, { Component } from "react";
import Pokemon from "./Pokemon";
import axios from "axios";

class PokemonList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeList: []
    };
  }

  componentDidMount() {
    const api = axios;
    let listPokemon = [];
    api
      .create({
        baseURL: "https://api.pokemontcg.io/v1/",
        timeout: 7000
      })
      .get("cards?subtype=Basic")
      .then(response => {
        let base = response.data.cards;
        for (let i = 0; i < response.data.cards.length; i++) {
          listPokemon.push({
            name: base[i].name,
            id: base[i].id
          });
        }
        this.setState({ pokeList: listPokemon });
      })
      .catch(error => {
        console.log(`The API Pokemon encountered a problem: ${error}`);
      });
  }

  render() {
    let page = this.props.page;
    let arrayShown = [];
    switch (page) {
      case 1:
        arrayShown = this.state.pokeList.slice(0, 20);
        break;
      case 2:
        arrayShown = this.state.pokeList.slice(20, 40);
        break;
      case 3:
        arrayShown = this.state.pokeList.slice(40, 60);
        break;
      case 4:
        arrayShown = this.state.pokeList.slice(60, 80);
        break;
      case 5:
        arrayShown = this.state.pokeList.slice(80, 100);
        break;
      default:
        arrayShown = this.state.pokeList.slice(0, 20);
    }
    return (
      <div className="row">
        {arrayShown.map(pokemon => {
          return (
            <Pokemon name={pokemon.name} id={pokemon.id} key={pokemon.id} />
          );
        })}
      </div>
    );
  }
}

export default PokemonList;

//<Pokemon />
