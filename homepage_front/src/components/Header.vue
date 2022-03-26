<template>
  <header class="header">
    <nav class="navMenu">
      <div class="navMenu__left">
        <div class="navMenu__logoWrapper">
          <router-link to="/">
            <img
              class="navMenu__logo"
              src="http://pngimg.com/uploads/viking/viking_PNG68.png"
              alt=""
            />
          </router-link>
        </div>
        <div class="navMenu__link">
          <router-link to="/">Home</router-link>
          <router-link to="/api">API</router-link>
        </div>
      </div>
      <div class="navMenu__right">
        <div class="navMenu__search">
          <form
            class="navMenu__form"
            action="https://www.google.com/search?q="
            method="get"
          >
            <input
              class="navMenu__inputSearch"
              type="search"
              name="q"
              id=""
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
};
</script>

<style lang="scss">
.header {
  width: 100%;
  height: 75px;
  background: #142740;
  border-bottom: 1px solid #142740;
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
  height: 100%;
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
</style>