<template>
  <header>
    <div class="logo"><i class="fa-solid fa-store fa-2xl"></i></div>
    <h1 class="title_appli">The Super Grocery Store </h1>
    <nav>
      <a href="/">Home</a>
      <a href="/A_propos">About</a>
      <a href="/products">Products</a>
      <a href="/Card">Card</a>
    </nav>
     <!-- <div class="input_container">
    <input v-model="searchKey" type="search" name="search-product" placeHolder="Recherchez un produit" class="search_input" autocomplete="off" />
  </div> -->
  </header>
</template>

// <script>
// export default {
//     data() {
//     return {
//       searchKey: "",
//     };
//   },
//     computed: {
//     searchProducts() {
//       return this.products.filter((product) => {
//         return product.title.toLowerCase().includes(this.searchKey.toLowerCase());
//       });
//     },
//   },
//     mounted() {
//     axios
//       .get("https://fakestoreapi.com/products")
//       .then((response) => {
//         this.products = response.data;
//         console.log(this.products);
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   },
// }
// </script>

<style>
header {
  height: 80px;
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
.title_appli {
  margin: auto;
  text-transform: uppercase;
  font-family: verdana;
  font-size: 22px;
  font-weight: 700;
  color: #f5f5f5;
} 

</style>
