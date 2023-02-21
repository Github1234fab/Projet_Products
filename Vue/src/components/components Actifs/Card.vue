<template>
  <div class="container_card">
    <div :key="index" v-for="(nom, index) in nom">
      <div class="card">
        <h1 class="title">{{ nom.title }}</h1>
           <h3 class="category">{{ nom.category }}</h3>
          <img class="image" :src="nom.image" alt="image de produits" />
        <p class="description">{{ nom.description }}</p>
     
        <h2 class="price">{{ nom.price }}</h2>
        <div class="rating">
          <span>{{ nom.rate }}</span>
          <span>{{ nom.count }}</span>
        </div>
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
.container_card {
  height: 100vh;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
}
.card {
box-shadow: 5px 10px 10px -4px rgb(74, 72, 72);
  background-color: rgb(255, 255, 255);
  height: 100%;
  width: 270px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  flex-wrap: 20px;
  padding: 20px;
  font-family: poppins;
}
.title {
  font-size: 16px;
  font-weight: 900;
margin-top: 10px;
  font-family: poppins;
}
.price {
  font-size: 14px;
  font-weight: 700;
   font-family: poppins;
}
.description {
  font-size: 12px;
  font-family: Cambria, serif;
   font-family: poppins;
}
.category {
  font-size: 14px;
   font-family: poppins;
}
.image {
  height: 80px;
  width: 80px;
}
.rating {
  font-size: 14px;
   font-family: poppins;
}
</style>
