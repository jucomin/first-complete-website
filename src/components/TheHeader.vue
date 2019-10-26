<template>
  <header>
    <router-link to="/">
      <img src="logo.png" alt="Cupcakes & cookies" />
    </router-link>
    <ul>
      <router-link to="/">Home</router-link>
      <li class="nav-icon">
        <router-link to="/">
          <img src="icons/house.png" alt="home" />
        </router-link>
      </li>
      <li class="nav-icon">
        <router-link to="/">
          <img src="icons/compass-arrow.png" alt="direct message" />
        </router-link>
      </li>
      <li class="nav-icon">
        <router-link to="/">
          <img src="icons/file.png" alt="file" />
        </router-link>
      </li>
      <li class="nav-icon">
        <router-link to="/">
          <img src="icons/question-mark.png" alt="questions" />
        </router-link>
      </li>
      <li class="nav-icon">
        <router-link to="/">
          <img src="icons/person.png" alt="profile" />
        </router-link>
      </li>
    </ul>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',
}
</script>

<style>
</style>