<script setup>
import {NButton} from 'naive-ui'
import {useRouter, useRoute} from "vue-router";
import {onMounted, ref} from "vue";

const router = useRouter()
const route = useRoute()
import api from '/API/api.js'

onMounted(() => {
  const id = Number(route.query.id)
  console.log(id)
  api.getNews(id).then(res => {
    console.log(res.data)
    newsDetails.value = res.data
    // 每次加载页面 观看量+1
    api.editNews({
      id: res.data.id,
      views: res.data.views + 1
    }).then(res => {
    })
  })
})
const newsDetails = ref('')
const toNews = () => {
  router.push('/news')
}
</script>

<template>
  <n-button type="primary" size="large" style="margin-top: 20px" @click="toNews">返回</n-button>
  <div class="box">
    <div class="info">
      <h2>{{ newsDetails.title }}</h2>
      <p>
        <span>{{ newsDetails.createtime }}</span>
        <span style="margin-left: 20px">浏览量 {{ newsDetails.views }}</span>
      </p>
      <div class="main" v-html="newsDetails.content"></div>
    </div>
  </div>
</template>

<style scoped>
.main {
  margin-top: 20px;
  font-size: 20px;
  line-height: 2;
  color: #333333;
}

.info > p {
  font-size: 18px;
  color: #666666;
  margin-top: 10px;
}

.info > h2 {
  font-size: 25px;
}

.box {
  margin-top: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  display: flex;
  padding: 30px;
}
</style>