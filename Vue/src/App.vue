<template> 
<Header/>
<router-view/> 
<Footer/>
</template>

<script>
import Header from './components/components Actifs/Header.vue';
import Footer from './components/components Actifs/Footer.vue';
export default {
  name: "App",
  components: {
Header, Footer
  }
}
</script>
<style>
</style>
