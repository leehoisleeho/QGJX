<script setup>
import {onMounted, ref} from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();
import { navStore } from "../../store/index.js";
const store = navStore()
const navList = [
  {
    name:'首页',
    key:0,
    path:'/'
  },
  {
    name:'产品中心',
    key:1,
    path:'/product'
  },
  {
    name:'公司资质',
    key:2,
    path:'/qualificationList'
  },
  {
    name:'视频中心',
    key:3,
    path:'/videoList'
  },
  {
    name:'新闻中心',
    key:4,
    path:'/news'
  },
  {
    name:'关于我们',
    key:5,
    path:'/about'
  },
]
// 切换导航
const tab = (item)=>{
  router.push(item.path)
}
const toIndex = ()=>{
  router.push('/')
}
</script>

<template>
  <div class="wrapper">
    <div class="wrapper_1">
      <div class="logo" @click="toIndex">
        <img src="../assets/images/logo.png">
        <h1>桥刚机械装备制造(红河)有限公司</h1>
      </div>
      <div class="nav">
        <ul class="nav_list">
          <li v-for="item in navList" :key="item.key" @click="tab(item)" :class=" item.key === store.n ? 'active':null">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.logo{
  cursor: pointer;
}
.active{
  color: #4285f4 !important;
}
.nav_list>li:hover{
  color: #4285f4;
}
.nav_list>li{

  font-size: 16px;
  margin-left: 20px;
  cursor: pointer;
  padding: 20px 0;
  color: #999999;
}
.nav_list{
  display: flex;
  align-items: center;
}
.logo>h1{
  font-size: 18px;
  font-weight: 350;
  color: #333333;
}
.logo{
  display: flex;
  align-items: center;
}
.logo>img{
  width: 40px;
  height: 40px;
  margin-right: 10px;
}
.wrapper_1{
  display: flex;
  width: 1440px;
  height: 70px;
  margin: 0 auto;
  align-items: center;
  justify-content: space-between;
}
.wrapper{
  height: 80px;
  width: 100vw;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  background: white;
  z-index: 999;
}
</style>