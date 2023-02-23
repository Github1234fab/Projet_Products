<template>
  <header>
    <div class="logo"><i class="fa-solid fa-store fa-2xl"></i></div>
    <h1 class="title_appli">The SuperMarket </h1>
    <nav>
      <a href="/">Home</a>
      <a href="/A_propos">About</a>
      <a href="/products">Products</a>
      <a href="/Card">Card</a>
    </nav>
  </header>
</template>

<script>
// export default {}
</script>

<style>
header {
  height: 150px;
  width: 100%;
  background: linear-gradient(  rgb(139, 54, 64 ), rgb(121, 55, 93));
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-content: center;
}
nav {
  display: flex;
  justify-content: space-around;
  width: 300px;
  font-size: 16px;
  margin-right: 50px;
}
a {
    font-family: poppins;
  text-decoration: none;
  color: white;
}
.logo {
  margin-left: 50px;
  color: white;
}
</style>
