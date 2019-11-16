<template>
  <header class="header">
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

<style lang= "scss" scoped>
.header {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}

@media (min-width: 768px) and (max-width: 1023px) {
  //tablet
  #app {
    width: 80%;
    margin: 15px auto;
    padding: 0 15px;
  }
  @media (min-width: 1024px) {
    //desktop
    #app {
      width: 1000px;
      margin: 20px auto;
      padding: 0 20px;
    }
  }
  .nav-icon {
    background-color: deeppink;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    list-style: none;
    display: inline-block;
    text-align: center;
  }
}
</style>

