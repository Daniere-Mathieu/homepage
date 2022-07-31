<template>
  <div class="form">
    <div class="form__area">
      <div class="form__high">
        <p @click="close">X</p>
      </div>
      <div class="form__low">
        <input type="text" name="" class="form__input" placeholder="Nom du theme" v-model="themeName">
        <input type="button" value="Valider" class="form__button" @click="createTheme">
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "AddTheme",
  methods: {
    close(){
      console.log('test')
      this.$emit('close', false)
    },
    createTheme() {
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
</style>