<template>
  <Header></Header>
  <router-view></router-view>
</template>

<script>
import Header from './components/Header.vue'
export default {
  name: "App",
  components: {
    Header,
  },
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Condensed");
* {
  box-sizing: border-box;
  color: #c2f2f2;
  font-family: "Roboto", sans-serif;
}
html{
  width: 100%;
  margin: auto;
}
body {
  margin: 0;
  //background: #182f4d;
  // width: fit-content;
  background: #133e76;
    // width: fit-content;
    // margin: auto;
}
a {
  color: #c2f2f2;
  padding: 0 10px;
  text-decoration: none;
  font-size: 1.2rem;
}
a:hover {
  color: #fff;
}
.main {
  display: flex;
  flex-direction: column;
  background: #133e76;
  &__wrapper {
    width: 950px;
    max-width: 1500px;
    // min-width: 400px;
    margin: auto;
    background: #182f4d;
    height: 100%;
    min-height: 1000px;
  }
}
.form {
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  &__area {
    background: #142740;
    width: 500px;
    margin: auto;
    margin-top: 100px;
    border-radius: 15px;
    padding: 10px;
  }
  &__high {
    display: flex;
    justify-content: flex-end;
    padding: 0px 10px;
    & > * {
        cursor: pointer;
        &:hover {
          color: black;
        }
    }
  }
  &__medium {
    display: flex;
    margin-bottom: 15px;
  }
  &__low{
    display: flex;
    padding: 0 10px;
    flex-direction: column;
    align-items: center;
  }
  &__input{
    height: 100%;
    background: #182f4d;
    border: none;
    border-radius: 15px;
    width: 300px;
    padding: 20px;
  }
  &__button{
    width: 300px;
    margin-top: 10px;
    background: #182f4d;
    border: none;
    border-radius: 15px;
    padding: 20px;
    cursor: pointer;
    &:hover{
      border: white 1px solid;
    }
  }
}
</style>
