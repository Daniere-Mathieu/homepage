<template>
  <div class="addTheme">
    <div class="addTheme__area">
      <div class="addTheme__high">
        <p>X</p>
      </div>
      <div class="addTheme__low">
        <input type="text" name="" class="addTheme__input" id="addThemeName" placeholder="Nom du theme" v-model="themeName">
        <input type="button" value="Valider" class="addTheme__button" id="addTheme__button" @click="validThemeInformation">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddTheme",
  methods: {
    validThemeInformation() {
      axios
      .post(`http://localhost:4000/theme/create`, {
      name: this.themeName,
      user: 1
    })
      .then((response) => {
        // JSON responses are automatically parsed.
        console.log(response.data);
        //this.posts = response.data;
      })
      .catch((e) => {
        this.errors.push(e);
      });
    }
  },
  data: function () {
    return {
      themeName: "",
    }
  },
};
</script>

<style lang="scss">
.addTheme {
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  &__area {
    background: #142740;
    width: 500px;
    height: 225px;
    margin: auto;
    margin-top: 100px;
    border-radius: 15px;
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
      // color: black;
      // background: #c2f2f2;
      border: white 1px solid;
    }
  }
}
</style>