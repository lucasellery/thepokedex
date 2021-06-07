import { action, makeAutoObservable } from 'mobx';

const LIMIT = 10;
let currentOffset = 0;

class PkmStore {

  pokemons = [];

  async fetchPokemons(offset = 0) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${LIMIT}&offset=${offset}`);
    const pokemonJson = await response.json();
    
    let pokemons = pokemonJson.results.map(async (pkm) => {
      const pokemonDetail = await this.getPokemonDetail(pkm.name);
      pkm.image = pokemonDetail.sprites.front_default;
      return pkm;
    })

    pokemons = await Promise.all(pokemons);
    return pokemons;
  }

  async getPokemonDetail(name) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
    const detail = await response.json();
    return detail;
  }

  async updatePokemonList(offset) {
    const pokemonJson = await this.fetchPokemons(offset);
    this.pokemons = [...this.pokemons, ...pokemonJson];
  }

  addPkmLToList = action((pokemons, pkmJson) => {
    this.pokemons = [...pokemons, ...pkmJson];
  })

  onReachEndList() {
    currentOffset += LIMIT;
    this.updatePokemonList(currentOffset);
  }

  constructor() {
    makeAutoObservable(this);
  }
}

export default PkmStore;