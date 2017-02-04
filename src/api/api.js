import axios from 'axios'
const baseUrl = 'http://pokeapi.co'
export const Api = {
  getPokemons (offset = '/api/v1/pokemon/?limit=12&offset=12') {
    return axios.get(`${baseUrl}${offset}`)
  },
  getPokemon (id = 1) {
    return axios.get(`${baseUrl}/api/v1/pokemon/${id}`)
  },
  getSprite(id = 1) {
    return axios.get(`${baseUrl}/api/v1/sprite/${id}`)
  }
};