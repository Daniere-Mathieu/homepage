<template>
  <div class="form">
    <div class="form__area">
      <div class="form__high">
        <p @click="close">X</p>
      </div>
      <div class="form__medium">
        <input
          type="button"
          value="inscription"
          @click="login = false"
          class="form__button"
        />
        <input
          type="button"
          value="connexion"
          @click="login = true"
          class="form__button"
        />
      </div>
      <div class="form__low">
        <input
          type="text"
          name=""
          class="form__input"
          placeholder="Nom de l'utilisateur"
          v-model="userName"
        />
        <input
          v-if="login"
          type="button"
          value="connexion"
          class="form__button"
          @click="validThemeInformation"
        />
        <input
          v-else
          type="button"
          value="inscription"
          class="form__button"
          @click="createUser"
        />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "User",
  methods: {
    close() {
      console.log("test");
      this.$emit("close", false);
    },
    createUser() {
      axios
        .post(`http://localhost:4000/user/create`, {
          name: this.userName,
        })
        .then((response) => {
          console.log(response.data);
          //this.posts = response.data;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },
    logUser() {},
  },
  data: function () {
    return {
      userName: "",
      login: false,
    };
  },
};
</script>

<style lang="scss"></style>
