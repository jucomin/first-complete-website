<template>
  <header class="header">
    <router-link to="/">
      <img src="../assets/logo.png" alt="Cupcakes & cookies" />
    </router-link>
    <ul>
      <li>
        <router-link class="nav-icon house" to="/"></router-link>
      </li>
      <li>
        <router-link class="nav-icon about" to="/about"></router-link>
      </li>
      <li>
        <router-link class="nav-icon prices" to="/prices"></router-link>
      </li>
      <li>
        <router-link class="nav-icon faq" to="/faq"></router-link>
      </li>
      <li>
        <router-link class="nav-icon profile" to="/"></router-link>
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
.house {
  background: url(../assets/icons/house.png);
}

.about {
  background: url(../assets/icons/compass-arrow.png);
}

.prices {
  background: url(../assets/icons/file.png);
}

.faq {
  background: url(../assets/icons/question-mark.png);
}

.profile {
  background: url(../assets/icons/person.png);
}

.header {
  display: grid;
  grid-template-rows: repeat(2, 1fr);
}
.nav-icon {
  background-position: center center;
  background-repeat: no-repeat;
  display: inline-block;
  background-color: deeppink;
  width: 32px;
  height: 32px;
  border-radius: 50%;
}

li {
  width: 32px;
  height: 32px;
  display: inline-block;
  list-style: none;
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
}
</style>

