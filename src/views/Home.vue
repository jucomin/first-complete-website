<template>
  <div class="home">
    <banner />
    <div>
      <category
        title="Cupcakes"
        description="Blah balah yolo"
        examples="['Chocolate cupcake', 'Red velvet cupcake', 'Vanilla cupcake']"
      />
      <category
        title="Muffins"
        description="Blah balah yolo"
        examples="['Banana muffin', 'Applesauce muffin','Chocolate chip muffin']"
      />
      <category
        title="Cookies"
        description="Blah balah yolo"
        examples="['Oatmeal cookie', 'Peanut butter cookie','Gluten-free cookie']"
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
