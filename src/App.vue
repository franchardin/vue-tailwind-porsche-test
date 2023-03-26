<script setup>
import Home from './views/Home.vue';
</script>

<script>
import AOS from 'aos'
import 'aos/dist/aos.css'
export default {
  mounted() {
    AOS.init()
  }
}</script>

<template>
  <div class="container mx-auto">
    <Home />
  </div>
</template>

<style scoped>
</style>
