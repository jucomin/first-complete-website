<template>
  <div class="home">
    <banner />
    <div class="options">
      <category
        title="Cupcakes"
        description="Blah balah yolo"
        seeMoreUrl="/cupcakes"
        v-bind:examples="['Chocolate cupcake', 'Red velvet cupcake', 'Vanilla cupcake']"
      />
      <category
        title="Muffins"
        description="Blah balah yolo"
        seeMoreUrl="/muffins"
        v-bind:examples="['Banana muffin', 'Applesauce muffin','Chocolate chip muffin']"
      />
      <category
        title="Cookies"
        description="Blah balah yolo"
        seeMoreUrl="/cookies"
        v-bind:examples="['Oatmeal cookie', 'Peanut butter cookie','Gluten-free cookie']"
      />
    </div>
  </div>
</template>

<script>
import Category from '../components/Category'
import Banner from '../components/Banner'
export default {
  name: 'home',
  components: {
    Category,
    Banner,
  },
}
</script>
<style>
.options {
  display: flex;
}
</style>
