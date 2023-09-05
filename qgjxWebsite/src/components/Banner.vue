<script setup>
import {NCarousel} from 'naive-ui'
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import api from '/API/api.js'

const router = useRouter()
const toDetails = (item) => {
  router.push('/newsDetails?id=' + item.newsid)
}
const list = ref([])
onMounted(() => {
  api.getBanner().then(res => {
    list.value = res.data
  })
})
</script>

<template>
  <div class="block"></div>
  <div class="bannerBox">
    <n-carousel show-arrow>
      <div class="item" @click="toDetails(item)" v-for="item in list">
        <div class="itemTitle">{{ item.title }}</div>
        <img :src="item.img" class="carousel-img">
      </div>
    </n-carousel>
  </div>
</template>

<style scoped>
.carousel-img {
  width: 100%;
  height: 810px;
  object-fit: cover;
}

.block {
  height: 90px;
}

.itemTitle {
  width: 100%;
  height: 70px;
  position: absolute;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  padding-left: 20px;
  font-size: 22px;
  color: white;
}

.item {
  cursor: pointer;
  position: relative;
}

.bannerBox {
  width: 1440px;
  height: 810px;
  margin-top: 10px;
  margin-left: auto;
  margin-right: auto;
  border-radius: 8px;
  position: relative;
  display: flex;
  overflow: hidden;
}

</style>