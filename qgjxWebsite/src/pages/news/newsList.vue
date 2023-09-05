<script setup>
import Header from "../../components/Header.vue";
import {useRouter} from "vue-router";
import {onMounted,ref} from "vue";
import api from '/API/api.js'
const router = useRouter()
const list = ref('')
onMounted(()=>{
  api.getNews().then(res=>{
    console.log(res)
    list.value = res.data
  })
})
const toNewsDetails = (id) => {
  router.push('/newsDetails?id='+ id)
}
</script>

<template>
  <div class="list" v-for="item in list">
    <div class="item">
      <img :src="item.img" alt="">
      <div class="item_1">
        <h1 @click="toNewsDetails(item.id)">{{item.title}}</h1>
        <p>
          <span>浏览量 {{item.views}}</span>
        </p>
        <p>
          <span>{{item.createtime}}</span>
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.item_1 {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
}

.list {
  margin-top: 20px;
}

.item_1 > h1:hover {
  color: #4285f4;
}

.item_1 > p {
  color: #666666;
  font-size: 18px;
}

.item_1 > h1 {
  font-size: 25px;
  cursor: pointer;
  color: #333333;
}

.item {
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  border-radius: 10px;
}

.item > img {
  width: 150px;
  height: 150px;
  margin-right: 20px;
}

.imgBox > img {
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