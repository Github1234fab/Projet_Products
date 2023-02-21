<template>
 
<h1>Products</h1>
<Card/>

</template>

<script>
import Card from "../components/components Actifs/Card.vue"
      components: {
Card
  }
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
