<template>
  <div class="header">
    <h1>Тестовый проект 1</h1>
    <nav>
      <nuxt-link to="/" class="header__link">Главная страница</nuxt-link>
      <nuxt-link to="/test" class="header__link">Вторая страница</nuxt-link>
    </nav>

  </div>
</template>

<script>
  export default {

  }
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 40px;
    border-bottom: 5px double black;
  }

  .header__link {
    margin-right: 20px;
  }

  .header__link:last-of-type {
    margin-right: 0;
  }
</style>
