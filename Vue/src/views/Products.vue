<template>
    <div class="main">
  <h1>Products</h1>
  <div :key="index" v-for="(nom, index) in nom">
    <div class="names">{{ nom.title }}</div>
  </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      nom: null,
    };
  },
  mounted() {
    axios.get("https://fakestoreapi.com/products").then((reponse) => {
      this.nom = reponse.data;
      console.log(this.nom);
    });
  },
};
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
