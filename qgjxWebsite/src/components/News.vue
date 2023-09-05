<script setup>
import {useRouter} from "vue-router";
import {onMounted, ref} from "vue";
import api from '/API/api.js'

const router = useRouter()
const toNewsDetails = (id) => {
  console.log(id)
  router.push('/newsDetails?id=' + id)
}
const toNewsList = () => {
  router.push('/newsList')
}
const firstNews = ref('')
const list = ref([])
onMounted(() => {
  api.getNews().then(res => {
    firstNews.value = res.data[0]
    list.value = res.data.filter((item, index) => {
      return index !== 0 && index < 9
    })
  })
})
</script>
<template>
  <div class="container">
    <div class="title">最新资讯</div>
    <div class="box">
      <div class="left">
        <img :src="firstNews.img" alt="">
        <div class="info">
          <p @click="toNewsDetails(firstNews.id)">{{ firstNews.title }}</p>
          <p>
            <span>{{ firstNews.createtime }}</span>
            <span>浏览量 {{ firstNews.views }}次</span>
          </p>
        </div>
      </div>
      <div class="right">
        <ul class="rightList">
          <li style="color: #999" v-if="list.length===0">暂无更多</li>
          <li v-for="item in list" @click="toNewsDetails(item.id)" v-if="list.length!==0">
            <span @click="toNewsDetails(item.id)">{{ item.title }}</span>
            <span>{{ item.createtime }}</span>
          </li>
          <li class="last" @click="toNewsList" v-if="list.length!==0">
            查看更多
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<style scoped>
.rightList > li > span:hover {
  color: #4285f4;
}

.rightList > li > span {
  cursor: pointer;
}

.info > p:hover {
  color: #4285f4;
}

.info > p {
  cursor: pointer;
}

.last {
  display: flex;
  flex-direction: row-reverse;
  cursor: pointer;
  color: #666666;
}

.last:hover {
  color: #4285f4;
}

.rightList > li > span:nth-child(2) {
  color: #999999;
}

.rightList > li {
  height: 74px;
  font-size: 20px;
  display: flex;
  justify-content: space-between;

  padding: 0 20px;
}

.info > p:nth-child(2) {
  color: #999999;
  font-size: 20px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
}

.info {
  font-size: 25px;
  color: #333333;
  margin-top: 10px;
}

.left > img {
  width: 100%;
  height: 600px;
}

.left {
  width: 600px;
}

.right {
  width: 800px;
  height: 445px;
}

.box {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;
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