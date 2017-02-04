<template>
  <div id="app">
    <h1>Hello vue</h1>
      <router-view></router-view>
    <!--<button  v-on:click="redirect()"> Click servive </button>-->
    <!--<ul v-for="pokemon in pokemons">
    <li>{{ pokemon.name }}</li>
  </ul>-->
  </div>
</template>

<script>
export default {
  name: 'app',
  // data: function () {
  //   return {
  //     meta: {},
  //     pokemons: []
  //   }
  // },
  components: {
  },
  computed: {
  },
  methods: {
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
