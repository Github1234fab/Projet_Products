<template>
  <section class="filters">
    <div class="filter_price">Prix</div>
    <div class="filter_color">Couleur</div>
    <div class="filter_category">Catégorie</div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.filters {
  height: 100vh;
  width: 200px;
  display: flex;
  flex-direction: column;
  padding: 10px;
  box-shadow: 1px 1px 5px grey;
  border-radius: 5px;
  margin-left: 30px;
  margin-top: 22px;
  background-color: lightgrey;
}
</style>
