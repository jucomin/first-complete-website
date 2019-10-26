<template>
  <header>
    <router-link to="/">
      <img src="../assets/logo.png" alt="Cupcakes & cookies" />
    </router-link>
    <ul>
      <router-link to="/">Home</router-link>
      <li class="nav-icon">
        <router-link to="/">
          <img src="../assets/icons/house.png" alt="home" />
        </router-link>
      </li>
      <li class="nav-icon">
        <router-link to="/">
          <img src="../assets/icons/compass-arrow.png" alt="direct message" />
        </router-link>
      </li>
      <li class="nav-icon">
        <router-link to="/">
          <img src="../assets/icons/file.png" alt="file" />
        </router-link>
      </li>
      <li class="nav-icon">
        <router-link to="/">
          <img src="../assets/icons/question-mark.png" alt="questions" />
        </router-link>
      </li>
      <li class="nav-icon">
        <router-link to="/">
          <img src="../assets/icons/person.png" alt="profile" />
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
.nav-icon {
  background-color: deeppink;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  list-style: none;
  display: inline-block;
  text-align: center;
}
</style>