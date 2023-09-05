<script setup>
import 'vue3-video-play/dist/style.css'
import {videoPlay} from 'vue3-video-play'
import {onMounted, ref} from "vue";
import api from '/API/api.js'
const src = ref('')
onMounted(() => {
  window.scrollTo(0, 0)
  api.getVideo().then(res => {
    let info  = res.data.filter(item => {
      return item.isindex === 1
    })
    src.value = info[0].src
  })
})
</script>
<template>
  <div class="container">
    <div class="title">视频</div>
    <videoPlay :autoPlay="false" width="1440px" preload='meta' height="810px" :src="src"></videoPlay>
  </div>
</template>
<style scoped>
.title {
  font-size: 25px;
  margin-bottom: 20px;
}

.container {
  width: 1440px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
</style>