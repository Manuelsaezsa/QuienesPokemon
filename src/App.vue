<template>
  <div>
    <header>
      <img src="./assets/logo.png" alt="Pokémon" class="icon">
      <h2>¿Quién es ese Pokémon?</h2>
      <h4>Pokemones descubiertos: {{ count }}</h4>
    </header>

    <section class="pokemon-section">
      <Pokemon :pokemon="pokemon" v-for="(pokemon, index) in pokemons" :key="index" @name-success="success($event)" :isDiscovered="discovered.includes(pokemon.name)"/>
    </section>
  </div>
</template>

<script>
import { getPokemonsFetch, getPokemonInfo } from './helpers/fetchPokemons.js'
import Pokemon from './components/Pokemon.vue'
export default {
  name: 'App',
  components: {
    Pokemon
  },
  data() {
    return {
      pokemons: [],
      discovered: [],
      count: 0
    }
  },
  mounted() {
    this.getPokemons();
  },
  methods: {
    async getPokemons(){
      const pokemonsApi = await getPokemonsFetch();
      await getPokemonInfo(pokemonsApi, this.pokemons);
    },
    success(name) {
      this.discovered.push(name);
      this.count++;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}

header {
  text-align: center;
}

.icon {
  width: 250px;
  height: 100px;
}

.pokemon-section {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  padding: 20px;
}
</style>
