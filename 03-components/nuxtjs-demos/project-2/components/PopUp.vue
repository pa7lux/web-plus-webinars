<template>
  <div v-if="opened" class="pop-up">
    <h2>Привет!</h2>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      opened: Boolean
    }
  }
</script>

<style scoped>
  .pop-up {
    width: 500px;
    min-height: 300px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    z-index: 2;
    padding: 20px;
  }
</style>
