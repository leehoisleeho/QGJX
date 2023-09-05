<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import api from '/API/api.js'
const router = useRouter()
const toProductDetails = (id)=>{
  router.push('/productDetails?id='+ id)
}
const list = ref([])
onMounted(() => {
  api.getProduct().then(res=>{
    list.value = res.data
  })
})
</script>
<template>
  <div class="container">
    <div class="title">产品中心</div>
    <ul class="list">
      <li v-for="item in list">
        <img :src="item.img">
        <p>{{item.title}}</p>
        <p>{{item.content}}</p>
        <p @click="toProductDetails(item.id)">查看详情</p>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.more>p:hover{
  color: #4285f4;
}
.more{
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
}
.more>p{
  font-size: 20px;
  margin-top: 20px;
  color: #999999;
  cursor: pointer;
  display: flex;
  align-items: center;
}
.list>li>img{
  width: 100%;
  height: 191px;
}
.list > li > p:nth-child(4):hover{
  color: #4285f4;
}
.list > li > p:nth-child(4){
  color: #666;
  font-size: 18px;
  cursor: pointer;
}
.list > li > p:nth-child(3){
  color: #666;
  font-size: 18px;
}
.list > li > p{
  font-size: 20px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
  white-space: nowrap; /* 防止文本换行 */
  overflow: hidden; /* 隐藏溢出部分的文本 */
  text-overflow: ellipsis; /* 显示省略号 */
  max-width: 100%; /* 可选，限制文本容器的最大宽度 */
}
.list > li {
  width: 24%;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-bottom: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}
/* 如果最后一行是3个元素 */
.list>li:last-child:nth-child(4n - 1) {
  margin-right: calc(24% + 4% / 3);
}
/* 如果最后一行是2个元素 */
.list>li:last-child:nth-child(4n - 2) {
  margin-right: calc(48% + 8% / 3);
}
/* 如果最后一行是1个元素 */
.list>li:last-child:nth-child(4n - 3) {
  margin-right: calc(72% + 12% / 3);
}

.title {
  font-size: 25px;
}

.container {
  width: 1440px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
</style>