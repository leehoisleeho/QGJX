<script setup>
import Header from "../components/Header.vue";
import {onMounted, ref} from "vue";
import api from '/API/api.js'

const list = ref('')
onMounted(() => {
  api.getQualification().then(res => {
    list.value = res.data
  })
})
const open = (item) => {
  api.editQualification({
    id: item.id,
    views: Number(item.views) + 1
  }).then(res => {
    console.log(res)
  })
  window.open(item.img, '_blank');
}
</script>

<template>
  <Header></Header>
  <div class="container">
    <div class="imgBox">
      <img src="/src/assets/images/zhengshu.png">
    </div>
    <div class="infoBox">
      <div class="item" v-for="item in list">
        <img :src="item.img" alt="">
        <p style="color: #333333">{{ item.title }}</p>
        <p @click="open(item)">查看证书</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item > p:hover {
  color: #4285f4;
}

.item > p {
  cursor: pointer;
  text-align: center;
  color: #999999;
  margin-top: 10px;
}

.infoBox {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
}

.item {
  width: 24%;
  margin-bottom: 20px;
}

.item > img {
  width: 100%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
}

/* 如果最后一行是3个元素 */
.item:last-child:nth-child(4n - 1) {
  margin-right: calc(24% + 4% / 3);
}

/* 如果最后一行是2个元素 */
.item:last-child:nth-child(4n - 2) {
  margin-right: calc(48% + 8% / 3);
}

/* 如果最后一行是1个元素 */
.items:last-child:nth-child(4n - 3) {
  margin-right: calc(72% + 12% / 3);
}

.infoBox {
  margin-top: 20px;
  width: 1440px;
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
  width: 1440px;
  margin: 100px auto;
}
</style>