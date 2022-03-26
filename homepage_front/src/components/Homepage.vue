<template>
  <main class="main">
    <div class="main__wrapper">
      <div class="hours">
        <div class="hours__wrapper">
          <span>{{ actualHours }}</span>
        </div>
      </div>
      <Grid titleGrid="Work">
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
  </main>
</template>

<script>
import Card from "./Card.vue";
import Grid from "./Grid.vue";
export default {
  name: "Homepage",
  components: {
    Card,
    Grid,
  },
  methods: {
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
    font-size: 30px;
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
  .card__title {
    font-size: 40px;
  }
  .card__listItem > a {
    font-size: 45px;
  }
  .navMenu__linkItem{
    font-size: 30px;
  }
}
@media screen and (max-width: 600px) {
  .card__list{
    grid-template-columns: repeat(1, 1fr);
  }
}
@media screen and (max-width: 400px) {
  .card__title {
    font-size: 30px;
  }
  .card__listItem > a {
    font-size: 35px;
  }
  .navMenu__linkItem{
    font-size: 25px;
  }
}
</style>