<script setup>
import Header from "../components/Header.vue";
import 'vue3-video-play/dist/style.css'
import {videoPlay} from 'vue3-video-play'
import {onMounted, ref} from "vue";
import api from '/API/api.js'

const list = ref([])
onMounted(() => {
  window.scrollTo(0, 0);
  api.getVideo().then(res => {
    console.log(res)
    list.value = res.data
  })
})
const videoViews = (item) => {
  api.editVideo({
    id: item.id,
    views: Number(item.views) + 1
  }).then(res => {
    console.log(res)
  })
}
</script>

<template>
  <Header></Header>
  <div class="container">
    <div class="imgBox">
      <img src="/src/assets/images/videoIcon.png">
    </div>
    <ul class="videoList">
      <li class="item" v-for="item in list" @click="videoViews(item)">
        <videoPlay width="710px" height="403px" :src="item.src"></videoPlay>
        <p>视频名称</p>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.videoList {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.imgBox > img {
  width: 250px;
}

.item > p {
  font-size: 20px;
  margin-top: 20px;
}

.item {
  margin-top: 20px;
}

.imgBox {
  width: 1440px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px 0;
  display: flex;
  justify-content: center;
  border-radius: 10px;
}

.container {
  margin-top: 90px;
  width: 1440px;
  margin-right: auto;
  margin-left: auto;
  padding-bottom: 100px;
}
</style>