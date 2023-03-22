<template>
  <header>
    <!-- <div class="logo"><i class="fa-solid fa-store fa-2xl"></i></div> -->
    <h1 class="title_appli">Boots & Shoes</h1>
     <div class="input_container">
    <input v-model="searchKey" type="search" name="search-product" placeHolder="Recherchez des articles et des marques" class="search_input" autocomplete="off" />
  </div>
    <nav>
      <a href="/">Home</a>
      <a href="/A_propos">About</a>
      <a href="/products">Products</a>
      <a href="/Card">Card</a>
    </nav>
   
  </header>
</template>

//
<script>
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
//
</script>

<style>
header {
  height: 80px;
  width: 100%;
  background: radial-gradient(343px at 46.3% 47.5%, rgb(242, 242, 242) 0%, rgb(241, 241, 241) 72.9%);
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
  color: grey;
}
/* .logo {
  margin-left: 50px;
  color: grey;
} */
.title_appli {
  margin-left: 20px;
  text-transform: uppercase;
  font-family: verdana;
  font-size: 22px;
  font-weight: 900;
  color: grey;
}
.search_input{
  width: 350px;
  border: none;
  box-shadow: 1px 1px 3px 1px inset lightGrey;
  padding: 8px;
  font-family: poppins;
  color: grey;
}
</style>
