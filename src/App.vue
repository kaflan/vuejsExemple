<template>
  <div id="app">
    Hello kaflan
    <button  v-on:click="getPokemon()"> Click servive </button>
    <ul v-for="pokemon in pokemons">
    <li>{{ pokemon.name }}</li>
  </ul>
  </div>
</template>

<script>
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
  methods: {
    getPokemon: function () {
      this.$service.getPokemons().then((res) => {
        this.meta = res.data.meta
        this.pokemons = res.data.objects
        return res.data
      })
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
