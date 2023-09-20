<script setup>
import api from "../../API/api.js";
import { onMounted, ref } from "vue";

const about = ref("");
onMounted(() => {
  api.getAbout().then((res) => {
    about.value = res.data[0];
  });
});
const open_map = () => {
  const coordinate = about.value.coordinate.split(",");
  console.log(coordinate);
  // 103.389729,23.357675
  let latitude = coordinate[0]; // 纬度
  let longitude = coordinate[1]; // 经度
  // 构建腾讯地图的URL
  let mapUrl = `https://apis.map.qq.com/uri/v1/marker?marker=coord:${longitude},${latitude};title:我的位置;`;
  // 使用JavaScript打开新窗口或标签页
  window.open(mapUrl, "_blank");
};
</script>

<template>
  <div class="container">
    <div class="box">
      <div class="left">
        <div class="logo">
          <p>{{ about.name }}</p>
        </div>
        <p>
          <span>服务热线:</span>
          <span>{{ about.phone }}</span>
        </p>
        <p>
          <span>邮箱:</span>
          <span>{{ about.email }}</span>
        </p>
        <p>
          <span>地址:</span>
          <span>{{ about.address }}</span>
        </p>
      </div>
      <div class="right">
        <div class="mapBox">
          <div class="mapBox_1" @click="open_map">
            <img src="/src/assets/images/mapIcon.jpg" />
            <p>点击查看位置</p>
          </div>
          <div class="mapBox_1">
            <img :src="about.src_map" />
            <p>扫描查看位置</p>
          </div>
          <div class="mapBox_1" @click="open_map">
            <img :src="about.src_wx" />
            <p>扫描联系我们</p>
          </div>
        </div>
      </div>
    </div>
    <div class="websiteInfo">
      Copyright © 2001-2023 桥刚机械装备制造(红河)有限公司 版权所有
      <a href="https://beian.miit.gov.cn/#/Integrated/index"
        >滇ICP备2022001513号-1</a
      >
    </div>
  </div>
</template>

<style scoped>
.mapBox_1 > p {
  font-size: 15px;
  text-align: center;
  margin-top: 10px;
  color: #666666;
  cursor: pointer;
}

.mapBox {
  display: flex;
}

.mapBox_1 {
  margin-left: 20px;
}

.mapBox_1 > img {
  width: 120px;
  height: 120px;
  border-radius: 10px;
}

.rightBox {
  display: flex;
}

.websiteInfo {
  margin-top: 20px;
  font-size: 15px;
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  color: #afafaf;
}

.logoBox > p {
  margin-top: 10px;
  color: #666666;
}

.logoBox > img {
  width: 80px;
}

.logoBox {
  margin-right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.logo > p {
  color: #666666;
  font-size: 30px;
}

.logo > img {
  width: 50px;
  margin-right: 10px;
}

.logo {
  display: flex;
  align-items: center;
}

.left > p:nth-child(2) > span:nth-child(2) {
  display: block;
  font-size: 30px;
}

.left > p {
  font-size: 18px;
  padding: 10px 0;
  color: #666666;
}

.left {
  width: 500px;
}

.right {
  width: 940px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.box {
  width: 1440px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  border-bottom: 1px solid white;
  padding-bottom: 20px;
  border-bottom: 1px solid #dedede;
}

.container {
  margin-top: 100px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px 0;
  background: #f8f8f8;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
}
</style>
