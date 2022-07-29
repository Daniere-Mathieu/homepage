<template>
  <div class="addCategory">
    <div class="addCategory__area">
      <div class="addCategory__high">
        <p>X</p>
      </div>
      <div class="addCategory__low">

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddCategory",
};
</script>

<style lang="scss">
.addCategory {
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(4px);
  &__area {
    background-color: blue;
    width: 700px;
    height: 700px;
    margin: auto;
    margin-top: 100px;
  }
  &__high {
    display: flex;
    justify-content: flex-end;
    padding: 0px 10px;
    & > * {
        cursor: pointer;
    }
  }
  &__low{
    display: flex;
  }
}
</style>