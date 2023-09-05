<script setup>
import {NButton} from "naive-ui";
import {onMounted, ref} from "vue";
import {useRouter} from "vue-router";
import {navStore} from "../../store/index.js";
import api from '/API/api.js'
const isShow = ref(false)
const list = ref('')
onMounted(() => {
  // 请求数据
  api.getQualification().then(res=>{
    list.value = res.data
  })
  // 动画
  const myElement = document.getElementById("myElement");
  myElement.addEventListener("mouseenter", function () {
    // 在这里执行你的代码
    isShow.value = true
  });
  myElement.addEventListener("mouseleave", function () {
    // 在这里执行你的代码
    isShow.value = false
  });
})

const router = useRouter();
const toQualifications = () => {
  router.push('/qualificationList')
}
</script>
<template>
  <div class="container">
    <div class="title">公司资质</div>
    <div class="box" id="myElement">
      <div class="box_1" v-show="isShow">
        <n-button type="info" ghost @click="toQualifications">
          查看公司资质
        </n-button>
      </div>
      <ul class="list">
        <li v-for="item in list">
          <img :src="item.img" alt="">
          <p>{{item.title}}</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<style scoped>
.n-button {
  padding: 30px;
  font-size: 20px;
}

.box_1 {
  width: 100%;
  height: 533px;
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  z-index: 100;
  position: relative;
}

.list > li > p {
  font-size: 18px;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 10px;
  white-space: nowrap; /* 防止文本换行 */
  overflow: hidden; /* 隐藏溢出部分的文本 */
  text-overflow: ellipsis; /* 显示省略号 */
  max-width: 100%; /* 可选，限制文本容器的最大宽度 */
  text-align: center;
}

.list > li > img {
  width: 100%;
}

.list > li {
  width: 340px;
  margin-right: 50px; /* 添加一些间距，可根据需要调整 */
  display: inline-block;
}

.list {
  white-space: nowrap; /* 防止文本换行 */
  animation: scrollList 20s linear infinite; /* 10秒的滚动动画，无限循环 */
}

@keyframes scrollList {
  0% {
    transform: translateX(0); /* 初始位置 */
  }
  100% {
    transform: translateX(-100%); /* 滚动到最右侧 */
  }
}

.title {
  font-size: 25px;
  margin-bottom: 20px;
}

.container {
  overflow: hidden;
  width: 1440px;
  margin-top: 50px;
  margin-left: auto;
  margin-right: auto;
}
</style>