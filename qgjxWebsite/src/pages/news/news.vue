<script setup>
import Header from "../../components/Header.vue";
</script>

<template>
  <Header></Header>
  <div class="container">
    <div class="imgBox">
      <img src="/src/assets/images/newsIcon.png">
    </div>
    <router-view></router-view>
  </div>
</template>

<style scoped>
.item_1{
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 20px 0;
}
.list{
  margin-top: 20px;
}
.item_1>h1:hover{
  color: #4285f4;
}
.item_1>p{
  color: #666666;
  font-size: 18px;
}
.item_1>h1{
  font-size: 25px;
  cursor: pointer;
  color: #333333;
}
.item{
  display: flex;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 20px;
  border-radius: 10px;
}
.item>img{
  width: 150px;
  height: 150px;
  margin-right: 20px;
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