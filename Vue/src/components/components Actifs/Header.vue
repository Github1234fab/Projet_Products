<template>
  <header>
  <div class="logo"></div>
  <h1 class="market">Market Super Place</h1>
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
  background-color: antiquewhite;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav {
  display: flex;
  justify-content: space-around;
  width: 300px;
  font-size: 16px;
  margin-right: 50px;
}
a{
  text-decoration: none;
}
.logo{
  height: 20px;
  width: 20px;
  background-color: aqua;
    margin-left: 50px;
}
.market{
  font-family: Poppins;
  color: rgb(3, 3, 64);
  font-size: 24px;
}
</style>
