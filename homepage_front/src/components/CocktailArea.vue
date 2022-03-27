<template>
  <main class="main">
    <div class="main__wrapper">
      <div class="cocktail__wrapper">
        <Card>
          <template v-slot:content>
            <div class="cocktail__wrapper__search">
              <input
                type="text"
                name="cocktail__search"
                id
                class="cocktail__input"
                placeholder="Search a Cocktail"
                @keydown.enter="searchCocktail($event)"
              />
              <div v-if="search">
                <h1>{{ CocktailResult[0].drinks[0].strDrink }}</h1>
                <div class="card__image__wrapper">
                  <img :src="CocktailResult[0].drinks[0].strDrinkThumb" alt class="cockail__image" />
                  <div
                    class="card__image__description"
                  >{{ CocktailResult[0].drinks[0].strInstructions }}</div>
                  <div>
                    <ul class="cocktail__list">
                      <li>{{ CocktailResult[0].drinks[0].strIngredient1 }}</li>
                      <li>{{ CocktailResult[0].drinks[0].strIngredient2 }}</li>
                      <li>{{ CocktailResult[0].drinks[0].strIngredient3 }}</li>
                      <li>{{ CocktailResult[0].drinks[0].strIngredient4 }}</li>
                      <li>{{ CocktailResult[0].drinks[0].strIngredient5 }}</li>
                      <li>{{ CocktailResult[0].drinks[0].strIngredient6 }}</li>
                      <li>{{ CocktailResult[0].drinks[0].strIngredient7 }}</li>
                      <li>{{ CocktailResult[0].drinks[0].strIngredient8 }}</li>
                      <li>{{ CocktailResult[0].drinks[0].strIngredient9 }}</li>
                      <li>{{ CocktailResult[0].drinks[0].strIngredient10 }}</li>
                      <li>{{ CocktailResult[0].drinks[0].strIngredient11 }}</li>
                      <li>{{ CocktailResult[0].drinks[0].strIngredient12 }}</li>
                      <li>{{ CocktailResult[0].drinks[0].strIngredient13 }}</li>
                      <li>{{ CocktailResult[0].drinks[0].strIngredient14 }}</li>
                      <li>{{ CocktailResult[0].drinks[0].strIngredient15 }}</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <Grid titleGrid="Random cocktail">
        <Card :titleName="item.drinks[0].strDrink" v-for="(item, index) in posts" :key="index">
          <template v-slot:content>
            <div class="card__image__wrapper">
              <img :src="item.drinks[0].strDrinkThumb" alt class="card__image" />
              <div class="card__image__description">{{ item.drinks[0].strInstructions }}</div>
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
  name: "CocktailArea",
  components: {
    Grid,
    Card,
  },
  data() {
    return {
      posts: [],
      errors: [],
      CocktailResult: [],
      search: false,
    };
  },
  methods: {
    searchCocktail(event) {
      let cocktail = event.target.value;
      const mySentence = cocktail
      const words = mySentence.split(" ");

      for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }

      cocktail = words.join(" ");

      event.target.value = "";
      axios
        .get(
          `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=` + cocktail
        )
        .then((response) => {
          this.CocktailResult[0] = response.data;
          this.search = true;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  created() {
    for (let i = 0; i < 6; i++) {
      axios
        .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
        .then((response) => {
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
.cocktail {
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
}
.card__image {
  object-fit: cover;
}
@media screen and (max-width: 700px) {
  .cocktail__list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }
  .cocktail__list > * {
    margin: 2px 5px;
  }
}
</style>