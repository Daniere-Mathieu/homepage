<template>
  <div class="card">
    <div class="card__body">
      <div class="card__title">
        <h2>{{ titleName }}</h2>
      </div>
      <div class="card__content">
        <slot name="content" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    titleName: {
      type: String,
      default: "",
    },
  },
};
</script>

<style lang="scss">
.card {
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  border: #142740 solid 1px;
  &__body {
    padding: 20px;
    display: flex;
    flex-direction: column;
  }
  &__title {
    display: flex;
    align-items: center;
    & > h2 {
      margin: 0;
    }
  }
  &__content {
    display: flex;
    margin: 5px 0px;
  }
  &__list {
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0px;
  }
  &__listItem {
    margin-top: 10px;
    & > a {
      padding: 0;
    }
  }
  &__image__wrapper {
    display: flex;
    height: 100%;
    flex-direction: column;
  }
  &__image {
    height: 200px;
    width: 100%;
  }
  &__image__description {
    padding-top: 10px;
  }
  &__data {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: 10px;
    > a {
      font-size: inherit;
    }
  }
}
</style>