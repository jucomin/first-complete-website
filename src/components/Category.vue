<template>
  <article>
    <h3>{{title}}</h3>
    <p>{{description}}</p>
    <ul>
      <li class="ingredient" v-for="example in examples" v-bind:key="example">{{ example }}</li>
    </ul>
    <router-link :to="seeMoreUrl">
      <button class="see-more">See more...</button>
    </router-link>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    examples: Array,
    seeMoreUrl: String,
  },
}
</script>

<style>
h3 {
  color: #ee2461;
}
article {
  flex: 1;
}
.ingredient {
  list-style: url('../assets/icons/check-mark.png');
}

.see-more {
  background-color: #ee2461;
  border: none;
  border-radius: 10px;
  color: white;
}
</style>