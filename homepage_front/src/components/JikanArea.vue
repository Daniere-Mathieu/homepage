<template>
  <main class="main">
    <div class="main__wrapper">
      <div class="jikan__wrapper">
        <Card>
          <template v-slot:content>
            <div class="jikan__wrapper__search">
              <input
                type="text"
                name="jikan__search"
                class="jikan__input"
                placeholder="Search a Anime"
                @keydown.enter="searchjikan($event)"
              />
              <div v-if="search">
                <h1>Search Anime</h1>
                <div class="jikan__search__wrapper">
                  <Card
                    :titleName="item.title"
                    v-for="(item, index) in jikanResult[0].data"
                    :key="index"
                  >
                    <template v-slot:content>
                      <div class="card__image__wrapper">
                        <img
                          :src="item.images.jpg.large_image_url"
                          alt=""
                          class="card__image"
                        />
                        <div class="card__image__description">
                          {{ item.synopsis }}
                        </div>
                        <div class="card__data">
                          <div>{{ item.type }}</div>
                          <a :href="item.url" target="_blank">more about</a>
                        </div>
                      </div>
                    </template>
                  </Card>
                </div>
              </div>
            </div>
          </template>
        </Card>
      </div>
      <Grid titleGrid="Random Anime">
        <Card
          :titleName="item.data.title"
          v-for="(item, index) in posts"
          :key="index"
        >
          <template v-slot:content>
            <div class="card__image__wrapper">
              <img
                :src="item.data.images.jpg.large_image_url"
                alt=""
                class="card__image"
              />
              <div class="card__image__description">
                {{ item.data.synopsis }}
              </div>
              <div class="card__data">
                <div>{{ item.data.type }}</div>
                <a :href="item.data.url" target="_blank">more about</a>
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
  name: "JikanArea",
  components: {
    Card,
    Grid,
  },
  methods: {
    searchjikan(event) {
      let jikan = event.target.value;
      event.target.value = "";
      axios
        .get(`https://api.jikan.moe/v4/anime?q=` + jikan)
        .then((response) => {
          this.jikanResult[0] = response.data;
          console.log("test");
          console.log(this.jikanResult[0].data[0]);
          this.search = true;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
  },
  data() {
    return {
      posts: [],
      errors: [],
      jikanResult: [],
      search: false,
    };
  },
  created() {
    for (let i = 0; i < 6; i++) {
      axios
        .get(`https://api.jikan.moe/v4/random/anime`)
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
.jikan {
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
  &__search__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 10px;
    margin: 10px 0px;
  }
}
.card__title {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.card__image__description {
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>