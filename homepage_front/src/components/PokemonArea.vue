<template>
  <main class="main">
    <div class="main__wrapper">
      <div class="pokemon__wrapper">
        <Card>
          <template v-slot:content>
            <div class="pokemon__wrapper__search">
              <input
                type="text"
                name="pokemon__search"
                class="pokemon__input"
                placeholder="Search a Pokemon"
                @keydown.enter="searchPokemon($event)"
              />
              <div v-if="search">
                <h1>{{ pokemonResult[0].name }}</h1>
                <div class="pokemon__image__search">
                  <img
                    :src="pokemonResult[0].sprites.front_default"
                    alt=""
                    class="pokemon__image"
                  />
                  <img
                    :src="pokemonResult[0].sprites.back_default"
                    alt=""
                    class="pokemon__image"
                  />
                </div>
                <div class="pokemon__image__search">
                  <img
                    :src="pokemonResult[0].sprites.front_shiny"
                    alt=""
                    class="pokemon__image"
                  />
                  <img
                    :src="pokemonResult[0].sprites.back_shiny"
                    alt=""
                    class="pokemon__image"
                  />
                </div>
                <div class="card__image__wrapper">
                  <div class="pokemon__type">
                    <div
                      class="card__image__description"
                      v-for="(itemType, indexA) in pokemonResult[0].types"
                      :key="indexA"
                    >
                      {{ itemType.type.name }}
                    </div>
                  </div>
                  <div class="pokemon__stat">
                    <div
                      class="card__image__description"
                      v-for="(itemStat, indexA) in pokemonResult[0].stats"
                      :key="indexA"
                    >
                      {{ itemStat.stat.name }}: {{ itemStat.base_stat }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <Grid titleGrid="Random pokemon">
        <Card
          :titleName="item.name"
          v-for="(item, index) in posts"
          :key="index"
        >
          <template v-slot:content>
            <div class="card__image__wrapper pokemon__image_wrapper">
              <img
                :src="item.sprites.front_default"
                alt=""
                class="card__image"
              />
              <div class="pokemon__type">
                <div
                  class="card__image__description"
                  v-for="(itemType, indexA) in item.types"
                  :key="indexA"
                >
                  {{ itemType.type.name }}
                </div>
              </div>
            </div>
          </template>
        </Card>
      </Grid>
    </div>
  </main>
</template>

<script>
import Card from "./Card.vue";
import Grid from "./Grid.vue";
import axios from "axios";
export default {
  name: "PokemonArea",
  components: {
    Card,
    Grid,
  },
  data() {
    return {
      posts: [],
      errors: [],
      pokemonResult: [],
      search: false,
    };
  },
  methods: {
    searchPokemon(event) {
      let pokemon = event.target.value;
      pokemon = pokemon.toLowerCase()
      event.target.value = "";
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/` + pokemon)
        .then((response) => {
          this.pokemonResult[0] = response.data;
          console.log(this.pokemonResult[0]);
          this.search = true;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  created() {
    for (let i = 0; i < 6; i++) {
      let random = Math.floor(Math.random() * 899);
      random = random === 0 ? 1 : random;
      axios
        .get(`https://pokeapi.co/api/v2/pokemon/` + random)
        .then((response) => {
          console.log(response.data);
          this.posts.push(response.data);
        })
        .catch((e) => {
          this.errors.push(e);
        });
    }
  },
};
</script>

<style lang="scss">
.pokemon {
  &__wrapper {
    padding: 20px;
  }
  &__list {
    display: flex;
    list-style: none;
    padding: 0;
    > * {
      margin: 0px 5px;
    }
  }
  &__input {
    width: 100%;
    height: 50px;
    background: #182f4d;
    border: none;
    border-radius: 15px;
    padding: 20px;
    &::placeholder {
      color: #c2f2f2;
    }
  }
  &__wrapper__search {
    width: 100%;
  }
  &__type {
    display: flex;
  }
  &__image_wrapper {
    width: 250px;
  }
  &__stat {
    display: flex;
  }
  &__image__search{
      width: 100%;
      > img {
          width: 50%;
      }
  }
}
.card__image__description {
  margin: 0px 5px 0px 0px;
}
@media screen and (max-width: 700px) {
  .pokemon__stat{
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>