<template>
  <div class="wrapper">
    <div class="content">
      <h1>Products</h1>
      <Card />
    </div>
  </div>
</template>

<script>
import Card from "../components/components Actifs/Card.vue";
export default {
  components: {
    Card,
  },
};
</script>

<style>
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
