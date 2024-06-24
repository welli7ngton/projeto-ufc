<!-- src/components/Footer.vue -->
<template>
  <div class="page-container">
    <div class="content-wrap">
      <!-- Seu conteúdo principal aqui -->
    </div>
    <footer class="footer">
      <div id="footer-high">
        <div id="logo"><img src="../../public/img/logos/E-M.svg" alt="logo E-M"></div>
        <div id="copyright">
          <p>&copy; 2017-2024 E-Motion Pictures LTDA</p>
        </div>
        <div id="social-midia">
          <span class="midia"><a href="#"><img src="../../public/img/social_Midia/youtube-Icon.svg"
                alt="Icone do youtube"></a></span>
          <span class="midia"><a href="#"><img src="../../public/img/social_Midia/instagram-Icon.svg"
                alt="Icone do instagram"></a></span>
          <span class="midia"><a href="#"><img src="../../public/img/social_Midia/x-Icon.svg" alt="Icone do X"></a></span>
        </div>
      </div>
      <!-- Linha amarela -->
      <div class="yellow-line"></div>
      <div id="member-footer">
        <ul class="icons">
          <li class="member">
            <p><a href="#">Termos de Uso</a></p>
          </li>
          <li class="member">
            <p><a href="#">Cookies</a></p>
          </li>
          <li class="member">
            <p><a href="#">Vagas</a></p>
          </li>
        </ul>
        <ul class="icons">
          <li class="member">
            <p><a href="#">Avisos legais</a></p>
          </li>
          <li class="member">
            <p><a href="#">Entre em contato</a></p>
          </li>
          <li class="member">
            <p><a href="#">Ajuda / FAQ</a></p>
          </li>
        </ul>
        <ul class="icons">
          <li class="member">
            <p><a href="#">Privacidade</a></p>
          </li>
          <li class="member">
            <p><a href="#">Código de resgate</a></p>
          </li>
          <li class="member">
            <p><a href="#">Imprensa</a></p>
          </li>
        </ul>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Footer',
}
</script>

<style scoped>
/* Configurações básicas para body e html */
html, body {
  height: 100%;
  margin: 0;
}

.page-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.content-wrap {
  flex: 1;
}

/* Estilização do rodapé */
.footer {
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
  height: 440px;
  background: linear-gradient(to top, #EC1E20, #070707);
  width: 100%;
}

#copyright {
  color: #F5F5F5;
}

#copyright p {
  font-family: 'SF pro display';
  font-weight: medium;
}

#footer-high {
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  align-items: center;
}

#social-media ul {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
}

.midia {
  margin-left: 10px;
}

#social-media a img {
  width: 28px;
  height: 28px;
}

.yellow-line {
  height: 1px;
  width: 100%;
  background-color: yellow;
  margin-top: 70px;
  opacity: 0.5;
}

#member-footer {
  margin-top: 80px;
  text-align: center;
}

.icons {
  display: flex;
  justify-content: space-evenly;
  margin-top: 15px;
  color: #f5f5f5;
  list-style: none;
  padding: 0;
}

.member {
  flex: 1;
  text-align: center;
}

.icons a {
  font-family: 'SF pro display';
  font-weight: medium;
  color: #f5f5f5;
  text-align: center;
  opacity: 0.5;
  transition: opacity 0.5s;
}

.icons a:hover {
  opacity: 1; /* Alvo da transição */
}
</style>
