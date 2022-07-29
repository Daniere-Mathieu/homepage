<template>
  <div class="mineSweeper">
    <div class="mineSweeper__area">

    </div>
  </div>
</template>

<script>
export default {
    name: "MineSweeper",
}
</script>

<style lang="scss">
.MineSweeper{
    position: absolute;
    width: 100%;
    height: 100%;
    backdrop-filter: blur(4px);
    &__area{
      background-color: red;
      width: 700px;
      height: 700px;
      margin: auto;
      margin-top: 100px;  
    }
}
</style>