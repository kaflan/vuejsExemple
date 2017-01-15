import axios from 'axios'
var MyPlugin = {}
MyPlugin.install = function (Vue) {
  const baseUrl = 'http://pokeapi.co'
  var service = {
    getPokemons (offset = '/api/v1/pokemon/?limit=12&offset=12') {
      if (offset === '/api/v1/pokemon/?limit=12&offset=0') return false
      return axios.get(`${baseUrl}${offset}`)
    }
  }
  Vue.prototype.$service = service
}
export default MyPlugin
