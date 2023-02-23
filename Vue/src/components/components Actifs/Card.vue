<template>
  <div class="container_card">
    <div class="card">
      <h1 class="title">{{ product.title }}</h1>
      <h3 class="category">{{ product.category }}</h3>
      <img class="image" :src="product.image" alt="image de produits" />
      <!-- COLLAPSE BS --------------------------------------------------------------------------- -->
      <div class="accordion" id="accordionExample">
        <div class="accordion-item">
          <h2 class="accordion-header" id="headingOne">
            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Description</button>
          </h2>
          <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div class="accordion-body">
              {{ product.description }}
            </div>
          </div>
        </div>
      </div>
      <!-- COLLAPSE BS --------------------------------------------------------------------------- -->
      <h2 class="price">{{ product.price }} €</h2>
      <div class="rating">
        <span>{{ product.rate }}</span>
        <span>{{ product.count }}</span>
      </div>
    </div>
  </div>
</template>

<script>
// import { stringifyExpression } from "@vue/compiler-core";
// import { createDOMCompilerError } from "@vue/compiler-dom";
export default {
  name: "Card",
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style>
.accordion-item {
  border: none;
}

.accordion-button {
  margin-top: 10px;
  border: solid 1px grey;
  padding: 5px;
}
.container_card {
  height: 100%;
  display: flex;
  gap: 20px;
  flex-wrap: wrap;
  margin-top: 20px;
  justify-content: center;
  margin-bottom: 20px;
}
.card {
  box-shadow: 0px 0px 8px -3px rgb(74, 72, 72);
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
  border-radius: 15px;
  border: none;
}
.title {
  font-size: 16px;
  font-weight: 600;
  margin-top: 10px;
  font-family: poppins;
}
.price {
  font-size: 14px;
  font-weight: 700;
  font-family: poppins;
  margin-top: 10px;
}
.description {
  font-size: 12px;
  font-family: Cambria, serif;
  font-family: poppins;
  margin-bottom: 15px;
}
.category {
  font-size: 14px;
  font-family: poppins;
}
.image {
  height: 80px;
  width: 80px;
  margin-bottom: 15px;
}
.rating {
  font-size: 14px;
  font-family: poppins;
}
</style>
