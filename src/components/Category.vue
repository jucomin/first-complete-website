<template>
  <div>
    <h1>{{title}}</h1>
    <h2>{{description}}</h2>
    <ul class="examples">
      <li v-for="example in examples" v-bind:key="example">{{ example }}</li>
    </ul>
  </div>
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