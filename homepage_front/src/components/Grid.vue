<template>
  <div class="grid">
    <div class="grid__titleWrapper">
      <h1 class="grid__title">{{ titleGrid }}</h1>
    </div>
    <div class="grid__wrapper">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "Grid",
  props: {
    titleGrid: {
      type: String,
    },
  },
};
</script>

<style lang="scss">
.grid {
  width: 950px;
  max-width: 1500px;
  //min-width: 400px;
  margin: auto;
  padding: 20px;
  &__wrapper {
    display: grid;
    grid-template-columns: repeat(3, 2fr);
    grid-gap: 10px;
  }
  &__titleWrapper {
    padding: 10px 0;
  }
  &__title {
    margin: 0;
  }
}
</style>