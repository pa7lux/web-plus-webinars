<template>
  <div v-if="shown" class="overlay" @click="$emit('overlayClick')">

  </div>
</template>

<script>
  export default {
    props: {
      shown: Boolean
    }
  }
</script>

<style  scoped>
  .overlay {
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: rgba(0,0,0, .5);
    z-index: 1;
  }
</style>
