<template>
  <main class="main">
    <div class="main__wrapper">
      <div class="hours">
        <div class="hours__wrapper">
          <span>{{ actualHours }}</span>
        </div>
      </div>
      <Grid titleGrid="Work" @open="displayTheme">
        <Card titleName="Global Dev">
          <template v-slot:content>
            <ul class="card__list">
              <li class="card__listItem">
                <a href="" target="_blank"> Github </a>
              </li>
              <li class="card__listItem">
                <a href="" target="_blank"> StackOverflow </a>
              </li>
              <li class="card__listItem">
                <a href="" target="_blank"> DevDocs </a>
              </li>
            </ul>
          </template>
        </Card>
        <Card titleName="Javascript">
          <template v-slot:content>
            <ul class="card__list">
              <li class="card__listItem">
                <a href="" target="_blank"> Mdn </a>
              </li>
            </ul>
          </template>
        </Card>
        <Card titleName="PHP">
          <template v-slot:content>
            <ul class="card__list">
              <li class="card__listItem">
                <a href="" target="_blank"> php.net </a>
              </li>
            </ul>
          </template>
        </Card>
        <Card titleName="UX">
          <template v-slot:content>
            <ul class="card__list">
              <li class="card__listItem">
                <a href="" target="_blank"> Dribbbles </a>
              </li>
            </ul>
          </template>
        </Card>
        <Card titleName="Regex">
          <template v-slot:content>
            <ul class="card__list">
              <li class="card__listItem">
                <a href="" target="_blank"> Regex101 </a>
              </li>
            </ul>
          </template>
        </Card>
        <Card titleName="Vue">
          <template v-slot:content>
            <ul class="card__list">
              <li class="card__listItem">
                <a href="" target="_blank"> Props </a>
              </li>
            </ul>
          </template>
        </Card>
      </Grid>
      <Grid titleGrid="Personnal">
        <Card titleName="media">
          <template v-slot:content>
            <ul class="card__list">
              <li class="card__listItem">
                <a href="" target="_blank"> Netflix </a>
              </li>
              <li class="card__listItem">
                <a href="" target="_blank"> Youtube </a>
              </li>
            </ul>
          </template>
        </Card>
      </Grid>
    </div>
    <!-- <MineSweeper></MineSweeper> -->
    <User v-if="userIsOpen" @close="displayUser"/>
    <AddTheme v-if="addThemeIsOpen" @close="displayTheme"/>
  </main>
</template>

<script>
import Card from "./Card.vue";
import Grid from "./Grid.vue";
// import MineSweeper from "./MineSweeper"
import User from './User.vue'
import AddTheme from "./AddTheme"
export default {
  name: "Homepage",
  components: {
    Card,
    Grid,
    // MineSweeper,
    AddTheme,
    User,
  },
  methods: {
    displayUser(i){
      this.userIsOpen = i;
    },
    displayTheme(i) {
      console.log(i)
      this.addThemeIsOpen = i;
    },
    getTime() {
      const today = new Date();
      let hours = today.getHours();
      let minute = today.getMinutes();
      if (hours === 0) {
        hours = "00";
      }
      if (minute < 10) {
        minute = "0" + minute;
      }
      const time = hours + ":" + minute;
      this.actualHours = time;
    },
  },
  beforeMount() {
    this.getTime();
    this.interval = setInterval(this.getTime, 5000);
  },
  unmounted() {
    clearInterval(this.interval);
  },
  data() {
    return {
      actualHours: "",
      interval: null,
      userIsOpen: true,
      addThemeIsOpen: false
    };
  },
};
</script>

<style lang="scss">
.hours {
  width: 950px;
  max-width: 1500px;
  //min-width: 400px;
  margin: auto;
  align-items: center;
  font-size: 4rem;
  margin-top: 20px;
  padding: 0 20px;
  &__wrapper {
    background: rgba(255, 255, 255, 0.03);
    border-radius: 10px;
    width: 100%;
    display: flex;
    justify-content: center;
    border: #142740 solid 1px;
  }
}
@media screen and (max-width: 950px) {
  body {
    width: 100%;
  }
  .grid__wrapper {
    grid-template-columns: repeat(2, 1fr);
  }
  .main__wrapper {
    width: 100%;
  }
  .grid {
    width: 100%;
  }
  .hours{
    width: 100%;
  }
  .navMenu{
    width: 100%;
  }
  .card__title {
    font-size: 20px;
  }
  .card__listItem > a {
    font-size: 25px;
  }
  .navMenu__linkItem{
    font-size: 20px;
  }
}
@media screen and (max-width: 750px) {
  .grid__wrapper {
    grid-template-columns: repeat(1, 2fr);
  }
}
@media screen and (max-width: 600px) {
  .card__list{
    grid-template-columns: repeat(1, 1fr);
  }
  .navMenu__inputSearch{
    width: 220px;
    padding: 15px;
  }
}
@media screen and (max-width: 350px) {
  .navMenu__inputSearch{
    width: 170px;
    padding: 15px;
  }
}
</style>