<script setup>
import Header from "../components/Header.vue";
import api from '/API/api.js'
import {onMounted, ref} from "vue";

const about = ref('')
onMounted(() => {
  api.getAbout().then(res => {
    about.value = res.data[0]
  })
})
const open_map = () => {
  const coordinate = about.value.coordinate.split(',')
  console.log(coordinate)
  // 103.389729,23.357675
  let latitude = coordinate[0]; // 纬度
  let longitude = coordinate[1]; // 经度
  // 构建腾讯地图的URL
  let mapUrl = `https://apis.map.qq.com/uri/v1/marker?marker=coord:${longitude},${latitude};title:我的位置;`
  window.open(mapUrl, '_blank');
}
</script>

<template>
  <Header></Header>
  <div class="block"></div>
  <div class="container">
    <img :src="about.src_cover">
    <div class="aboutInfo">
      <h2>关于我们</h2>
      <p v-html="about.content"></p>
    </div>
    <div class="aboutInfo">
      <h2>联系方式 </h2>
      <p>{{ about.name }}</p>
      <p>
        <span>联系电话 </span>
        <span>{{ about.phone }}</span>
      </p>
      <p>
        <span>邮箱 </span>
        <span>{{ about.email }}</span>
      </p>
      <p>
        <span>地址 </span>
        <span>{{ about.address }}</span>
      </p>
      <div class="map">
        <div @click="open_map">
          <img src="/src/assets/images/mapIcon.jpg">
          <p>点击查看公司位置</p>
        </div>
        <div>
          <img :src="about.src_map">
          <p>扫描获取公司位置</p>
        </div>
        <div>
          <img :src="about.src_wx">
          <p>扫描联系我们</p>
        </div>
      </div>
    </div>
    <div class="block"></div>
  </div>
</template>

<style scoped>
.map > div > p:hover {
  color: #4285f4;
}

.map > div {
  margin-right: 40px;
}

.map > div > p {
  font-size: 20px;
  text-align: center;
  margin-top: 10px;
  color: #666666;
  cursor: pointer;
}

.map > div > img {
  width: 300px;
  height: 300px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
}

.map {
  margin-top: 20px;
  display: flex;
}

.aboutInfo > p {
  font-size: 20px;
  line-height: 2.2em;
  color: #666666;
}

.aboutInfo > h2 {
  margin-bottom: 10px;
}

.aboutInfo {
  margin-top: 20px;
}

.container > img {
  width: 1440px;
  height: 810px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
}

.container {
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
}

.block {
  height: 100px;
}
</style>