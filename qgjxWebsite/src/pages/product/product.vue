<script setup>
import Header from "../../components/Header.vue";
import {useRouter} from "vue-router";
import productList from './productList.vue'
const router = useRouter()
const toDetails = ()=>{
  router.push('/productDetails')
}
</script>

<template>
  <Header></Header>
  <div class="container">
    <div class="imgBox">
      <img src="/src/assets/images/chanping.png">
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.list > .item > p:nth-child(4):hover{
  color: #4285f4;
}
.list > .item > p:nth-child(4){
  color: #666;
  font-size: 18px;
  cursor: pointer;
}
.list > .item > p:nth-child(3){
  color: #666;
  font-size: 18px;
}
.list > .item > p{
  font-size: 20px;
  margin-top: 10px;
  padding-left: 20px;
  padding-right: 20px;
  white-space: nowrap; /* 防止文本换行 */
  overflow: hidden; /* 隐藏溢出部分的文本 */
  text-overflow: ellipsis; /* 显示省略号 */
  max-width: 100%; /* 可选，限制文本容器的最大宽度 */
}

.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 20px;
}
/* 如果最后一行是3个元素 */
.list>.item:last-child:nth-child(4n - 1) {
  margin-right: calc(24% + 4% / 3);
}
/* 如果最后一行是2个元素 */
.list>.item:last-child:nth-child(4n - 2) {
  margin-right: calc(48% + 8% / 3);
}
/* 如果最后一行是1个元素 */
.list>.item:last-child:nth-child(4n - 3) {
  margin-right: calc(72% + 12% / 3);
}
.item>img{
  width: 100%;
  height: 192px;
}
.item{
  width: 340px;
  margin-bottom: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding-bottom: 20px;
  border-radius: 10px;
  overflow: hidden;
}
.list{
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
}
.imgBox>img{
  width: 250px;
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