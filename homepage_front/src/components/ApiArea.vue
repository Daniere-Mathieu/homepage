<template>
  <main class="main">
    <div class="main__wrapper">
      <Grid>
        <router-link to="/cocktail">
          <Card titleName="Cocktail"></Card>
        </router-link>
        <router-link to="/jikan">
          <Card titleName="Jikan"></Card>
        </router-link>
        <router-link to="/pokemon">
          <Card titleName="Pokemon"></Card>
        </router-link>
        <router-link to="/coingecko">
          <Card titleName="Coin Gecko"></Card>
        </router-link>
      </Grid>
    </div>
  </main>
</template>

<script>
import Card from "./Card.vue";
import Grid from "./Grid.vue";
import axios from "axios";
export default {
  name: "ApiArea",
  components: {
    Card,
    Grid,
  },
  data() {
    return {
      posts: [],
      errors: [],
    };
  },
  created() {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/random.php`)
      .then((response) => {
        // JSON responses are automatically parsed.
        console.log(response.data);
        this.posts = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
  },
};
</script>

<style>
</style>