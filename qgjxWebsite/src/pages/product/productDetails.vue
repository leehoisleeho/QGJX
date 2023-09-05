<script setup>
import {NButton} from 'naive-ui'
import {useRouter,useRoute} from "vue-router";
import {onMounted,ref} from 'vue'

const router = useRouter()
const route = useRoute()
import api from '/API/api.js'

const productDetails = ref('')
onMounted(() => {
  const id = Number(route.query.id)
  api.getProduct(id).then(res => {
    productDetails.value = res.data
    // 每次加载页面 观看量+1
    api.editProduct({
      id: res.data.id,
      views: res.data.views + 1
    }).then(res => {})
  })
})
const toProduct = () => {
  router.push('/product')
}
</script>

<template>
  <n-button type="primary" size="large" style="margin-top: 20px" @click="toProduct">返回</n-button>
  <div class="box">
    <img :src="productDetails.img" alt="">
    <div class="info">
      <h2>{{productDetails.title}}</h2>
      <div class="des">
        <h3>商品描述</h3>
        <p v-html="productDetails.content"></p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.info{
  height: 500px;
  overflow-y: auto;
}
.des > p {
  margin-top: 10px;
  color: #666666;
  font-size: 20px;
  line-height: 1.8em;
}

.des {
  margin-top: 20px;
}

.box > img {
  width: 500px;
  height: 500px;
  margin-right: 30px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 20px;
}

.box {
  margin-top: 20px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  border-radius: 10px;
  display: flex;
  padding: 30px;
}
</style>