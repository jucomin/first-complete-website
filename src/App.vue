<template>
  <div id="app">
    <the-header />
    <router-view />
  </div>
</template>

<script>
import TheHeader from './components/TheHeader'
export default {
  components: {
    TheHeader,
  },
}
</script>

<style lang="scss">
@font-face {
  font-family: 'SignikaLight';
  font-style: normal;
  font-weight: 300;
  src: local('Signika-Light'),
    url(http://themes.googleusercontent.com/static/fonts/signika/v3/koFYE26bhT88HgRA8f4vbRsxEYwM7FgeyaSgU71cLG0.woff)
      format('woff');
}

@font-face {
  font-family: 'Signika';
  font-style: normal;
  font-weight: 400;
  src: local('Signika'), local('Signika-Regular'),
    url(http://themes.googleusercontent.com/static/fonts/signika/v3/_M5k9_BZTkfaM2dnN0vNGw.woff)
      format('woff');
}

@font-face {
  font-family: 'SignikaSemibold';
  font-style: normal;
  font-weight: 600;
  src: local('Signika-Semibold'),
    url(http://themes.googleusercontent.com/static/fonts/signika/v3/FZa_MODmDkR9DTu5jHSnSRsxEYwM7FgeyaSgU71cLG0.woff)
      format('woff');
}

@font-face {
  font-family: 'SignikaBold';
  font-style: normal;
  font-weight: 700;
  src: local('Signika-Bold'),
    url(http://themes.googleusercontent.com/static/fonts/signika/v3/7M5kxD4eGxuhgFaIk95pBRsxEYwM7FgeyaSgU71cLG0.woff)
      format('woff');
}

body,
select,
input,
textarea,
p,
a,
label {
  color: #444;
  font-family: Signika, Arial, serif;
}

body {
  background: #f6c5d4 url(assets/background.jpg) 0 0 repeat;
}
#app {
  width: 90%;
  margin: 10px auto;
  background: #fff;
  box-shadow: #666666 0px 0px 7px;
  overflow: hidden;
  border-radius: 10px;
  padding: 0 10px;
}

@media (min-width: 768px) and (max-width: 1023px) {
  //tablet
  #app {
    width: 80%;
    margin: 15px auto;
    padding: 0 15px;
  }
}
@media (min-width: 1024px) {
  //desktop
  #app {
    width: 1000px;
    margin: 20px auto;
    padding: 0 20px;
  }
}
</style>
