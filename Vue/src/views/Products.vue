<template>
    <!-- <div class="main">
  <h1>Products</h1>
  <div :key="index" v-for="(infos, index) in infos">
    <div class="names">{{ infos.price }}</div>
    <img :src = "infos.image" alt="">
  </div>
  </div> -->
<h1>Products</h1>
<Card></Card>

</template>

<script>
import Card from "../components/components Actifs/Card.vue"
// import axios from "axios";
// export default {
      components: {
Card
  }
//   data() {
//     return {
//       infos: null,
//     };
//   },
//   mounted() {
//       axios.get("https://fakestoreapi.com/products").then((reponse) => {
//           this.infos = reponse.data; console.log(this.infos);});
//   },
// };
</script>

<style>
.main{
    background-color: rgb(255, 255, 255);
    height: 100%;
}
h1 {
  font-size: 16px;
}

.names {
  height: 100px;
  width: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-left: 30px;
}
</style>
