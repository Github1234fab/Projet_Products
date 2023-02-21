<template>
  <h1>Card</h1>
  <div class="card">
    <div :key="index" v-for="(nom, index) in nom">
      <h1 class="title">{{ nom.title }}</h1>
      <p class="description">{{ nom.description }}</p>
      <h3 class="category">{{ nom.category }}</h3>
      <img class="image" :src="nom.image" alt="image de produits" />
      <h2 class="price">{{ nom.price }}</h2>
      <div class="rating">
        <span>{{ nom.rate }}</span>
        <span>{{ nom.count }}</span>
      </div>
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
.card {
  background-color: rgb(255, 255, 255);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  flex-wrap: 20px;
}
.title {
  font-size: 16px;
  font-weight: 900;
}
.price {
  font-size: 14px;
  font-weight: 700;
}
.description{
font-size: 15px;
font-family: Cambria, serif;
}
.category{
    font-size: 14px;
}
.image{
    height: 80px;
    width: 80px;
}
.rating{
    font-size: 14px;
}
</style>
