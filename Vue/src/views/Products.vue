<template>
  <div class="wrapper">
    <div class="content">
      <h1>Products</h1>
 <div class="product-list">
      <Card
        v-for="(product, index) in products"
        :key="index"
        :product="product"
      />
            </div>
      </div>
      </div>
        
   
</template>

<script>
import { stringifyExpression } from "@vue/compiler-core";
import axios from "axios";
import Card from "../components/components Actifs/Card.vue";
export default {
  name: "Products",
  components: {
    Card,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios.get("https://fakestoreapi.com/products")
      .then((response) => {
      this.products = response.data;
      console.log(this.products);
      })
      .catch(error => {
        console.log(error);
      });
    },
};

</script>

<style>
.product-list{
   height: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
  margin-bottom: 20px;
}
.wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.content {
  flex-grow: 1;
}

h1 {
  font-size: 16px;
}
</style>
