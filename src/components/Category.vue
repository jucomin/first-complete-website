<template>
  <article>
    <h3>{{title}}</h3>
    <p>{{description}}</p>
    <ul>
      <li class="ingredient" v-for="example in examples" v-bind:key="example">{{ example }}</li>
    </ul>
    <button class="see-more">Veja mais</button>
  </article>
</template>

<script>
export default {
  props: {
    title: String,
    description: String,
    examples: Array,
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