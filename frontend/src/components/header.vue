<template>

  <div class="header">
    <div class="logo-links">
      <router-link to="/" class="logo">
        <a href="">
          <img src="../../public/img/E-Motion.svg" alt="logo e-motion">
        </a>
      </router-link>
      <nav class="nav-links">
        <a href="#">Inicio</a>
        <a href="#">Categoria</a>
        <a href="#">Favoritos</a>
      </nav>
    </div>
    <div class="icons">
      <span class="icon"><a href="#"><img src="../../public/img/icons/icon_Search.svg"
            alt="icone de pesquisa de filmes"></a></span> <!-- ícone de busca -->
      <span class="icon"><a href="#"><img src="../../public/img/icons/icon_Buycard.svg"
            alt="icone de carrinho de compras dos filmes"></a></span> <!-- ícone de carrinho -->
      <span class="icon"><a href="#"><img src="../../public/img/icons/icon_Profile.svg"
            alt="icone do perfil do usuário"></a></span> <!-- ícone de usuário -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style scoped>
.header {
  z-index: 1000;
  width: 100%;
  height: 45px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #EC1E20;
  position: fixed;
  top: 0;
  left: 0;
  padding-left: 5%;
  padding-right: 5%;
  box-sizing: border-box;
}

.logo-links {
  display: flex;
}

.nav-links {
  padding-left: 2%;
  display: flex;
  align-items: center;
}

.nav-links a {
  font-family: 'SF pro display';
  margin: 0px 10px;
  color: white;
  text-decoration: none;
  font-size: 15px;
}

.icon {
  font-size: 20px;
  margin-left: 15px;
}
</style>