<template>
  <footer role="contentinfo">
    <div class="institucional">
      <p>Cupcakes & Cookies 2013. Todos os direitos reservados.</p>
      <p>
        Conheça a nossa
        <a href>Política de Privacidade.</a>
      </p>
    </div>
    <div class="redes">
      <a href="https://twitter.com" class="tw"></a>
      <a href="http://facebook.com" class="fb"></a>
      <a href="http://br.linkedin.com/" class="in"></a>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style>
footer {
  clear: both;
  width: 100%;
  margin-left: -20px;
  padding: 46px 20px 40px;
  background: #ee2461;
  margin-top: 40px;
  overflow: hidden;
}

footer .institucional {
  float: left;
  font-size: 14px;
  font-style: italic;
}

footer .institucional p {
  color: white;
  font-family: Tahoma;
}

footer .institucional a {
  color: white;
  text-decoration: underline;
  font-family: Tahoma;
}

footer .redes {
  float: right;
  overflow: hidden;
  margin-right: 20px;
}

footer .redes a {
  display: block;
  width: 31px;
  height: 31px;

  float: left;
  margin: 5px;
  border-radius: 20px;
}

footer .redes a.fb {
  background: url(../assets/icons/facebook.png) 0 0 no-repeat;
}

footer .redes a.in {
  background: url(../assets/icons/linkedin.png) 0 0 no-repeat;
}

footer .redes a.tw {
  background: url(../assets/icons/twitter.png) 0 0 no-repeat;
}

footer .redes a:hover {
  box-shadow: #666666 0 0 5px;
}
</style>