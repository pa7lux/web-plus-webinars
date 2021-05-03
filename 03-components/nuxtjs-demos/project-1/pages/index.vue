<template>
  <div class="index">
    <div class="index__text">
      <h2>Text</h2>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore commodi error eaque recusandae qui voluptas sed cupiditate aperiam quidem libero reprehenderit consequatur exercitationem nulla repudiandae odio ad, ab perferendis illo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore commodi error eaque recusandae qui voluptas sed cupiditate aperiam quidem libero reprehenderit consequatur exercitationem nulla repudiandae odio ad, ab perferendis illo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore commodi error eaque recusandae qui voluptas sed cupiditate aperiam quidem libero reprehenderit consequatur exercitationem nulla repudiandae odio ad, ab perferendis illo.</p>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore commodi error eaque recusandae qui voluptas sed cupiditate aperiam quidem libero reprehenderit consequatur exercitationem nulla repudiandae odio ad, ab perferendis illo.</p>
    </div>
    <div class="index__faq">
      <h2>FAQ</h2>
      <Accordition :heading="'Первый'">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt beatae similique quod quas nemo, voluptatem culpa nobis in. Odio neque consequuntur placeat voluptate repudiandae eligendi itaque corporis in ab.</p>
      </Accordition>
      <Accordition :heading="'Второй'">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia nesciunt beatae similique quod quas nemo, voluptatem culpa nobis in. Odio neque consequuntur placeat voluptate repudiandae eligendi itaque corporis in ab.</p>
      </Accordition>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style>
.index__text {
  width: 80%;
  margin: 40px auto;
}

.index__faq {
  width: 80%;
  margin: 40px auto;
}
</style>
