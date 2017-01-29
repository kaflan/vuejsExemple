<template>
  <div id="app">
    Hello kaflan
      <div> 
         <p>{{ count }}</p>
  <p>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </p>
      </div>
      <router-view></router-view>
      
    <button  v-on:click="redirect()"> Click servive </button>
    <ul v-for="pokemon in pokemons">
    <li>{{ pokemon.name }}</li>
  </ul>
  </div>
</template>

<script>
import store from './store.js'
export default {
  name: 'app',
  data: function () {
    return {
      meta: {},
      pokemons: []
    }
  },
  components: {
  },
  mounted: function () {
    this.getPokemon()
    console.log('reaby')
  },
  computed: {
    count () {
      return store.state.count
    }
  },
  methods: {
    redirect () {
      this.$router.push('/success')
    },
    getPokemon () {
      this.$service.getPokemons().then((res) => {
        this.meta = res.data.meta
        this.pokemons = res.data.objects
        return res.data
      })
    },
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    }
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
