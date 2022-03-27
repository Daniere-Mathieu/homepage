<template>
  <header class="header">
    <nav class="navMenu">
      <div class="navMenu__left">
        <input id="menu-toggle" type="checkbox" />
        <label class="menu-button-container" for="menu-toggle">
          <div class="menu-button"></div>
        </label>
        <div class="navMenu__logoWrapper">
          <router-link to="/">
            <img class="navMenu__logo" src="http://pngimg.com/uploads/viking/viking_PNG68.png" alt />
          </router-link>
        </div>
        <div class="navMenu__link">
          <router-link to="/" class="navMenu__linkItem" @click="unckeck">Home</router-link>
          <router-link to="/api" class="navMenu__linkItem" @click="unckeck">API</router-link>
        </div>
      </div>
      <div class="navMenu__right">
        <div class="navMenu__search">
          <form class="navMenu__form" action="https://www.google.com/search?q=" method="get">
            <input
              class="navMenu__inputSearch"
              type="search"
              name="q"
              id
              placeholder="Search on Google"
            />
          </form>
        </div>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  name: "Header",
  methods: {
    unckeck(){
      document.getElementById("menu-toggle").checked = false;
    }
  }
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 75px;
  background: #142740;
  border-bottom: 1px solid #142740;
  position: relative;
}
.navMenu {
  width: 950px;
  max-width: 1500px;
  //min-width: 400px;
  height: 100%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
}
.navMenu__left {
  display: flex;
  align-items: center;
  height: 100%;
}
.navMenu__logo {
  width: 50px;
  height: 50px;
}
.navMenu__link {
  display: flex;
  align-items: center;
  padding: 20px;
}
.navMenu__right {
  display: flex;
  align-items: center;
  height: 100%;
}
.navMenu__search {
  display: flex;
  align-items: center;
  height: 100%;
}
.navMenu__form {
  //height: 100%;
}
.navMenu__inputSearch {
  height: 100%;
  background: #182f4d;
  border: none;
  border-radius: 15px;
  width: 300px;
  padding: 20px;
}
.navMenu__inputSearch::placeholder {
  color: #c2f2f2;
}
.navMenu__avatar {
  width: 50px;
  clip-path: circle(38%);
  margin: 0 20px;
}
// sandwich Button from https://codepen.io/alvarotrigo/pen/MWEJEWG
.menu-button-container {
  display: none;
  height: 100%;
  width: 50px;
  cursor: pointer;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#menu-toggle {
  display: none;
}
.menu-button,
.menu-button::before,
.menu-button::after {
  display: block;
  background-color: #fff;
  position: absolute;
  height: 5px;
  width: 50px;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  border-radius: 2px;
}
.menu-button::before {
  content: '';
  margin-top: -12px;
}

.menu-button::after {
  content: '';
  margin-top: 12px;
}
#menu-toggle:checked + .menu-button-container .menu-button::before {
  margin-top: 0px;
  transform: rotate(405deg);
}

#menu-toggle:checked + .menu-button-container .menu-button {
  background: rgba(255, 255, 255, 0);
}

#menu-toggle:checked + .menu-button-container .menu-button::after {
  margin-top: 0px;
  transform: rotate(-405deg);
}
@media (max-width: 700px) {
  .menu-button-container {
    display: flex;
  } 
  .navMenu__link{
    display: none;
  }
  #menu-toggle:checked ~ .navMenu__link{
    display: flex;
    position: absolute;
    top: 75px;
    left: 0;
    flex-direction: column;
    background: #142740;
    width: 100%;
    //border-bottom: white solid 1px;
    border-top: #c2f2f2 solid 1px;
    align-items: flex-start;
  }
  .navMenu__logoWrapper{
    display: none;
  }
  .navMenu__linkItem{
    margin: 5px 0;
    //border-bottom: white solid 1px;
    padding: 0;
  }
  .navMenu__right{
    //display: none;
  }
  .navMenu__left{
    width: 100%;
    justify-content: space-between;
  }
}
</style>