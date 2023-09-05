<script setup>
import Header from "../components/Header.vue";
import Banner from "../components/Banner.vue";
import Product from "../components/Product.vue";
import Qualification from "../components/Qualification.vue";
import Video from "../components/Video.vue";
import News from "../components/News.vue";
import Footer from "../components/Footer.vue";
import {onMounted, ref} from "vue";


</script>

<template>
  <div class="container">
    <Header></Header>
    <Banner></Banner>
    <Product></Product>
    <Qualification></Qualification>
    <Video></Video>
    <News></News>
    <Footer></Footer>
  </div>
</template>

<style scoped></style>