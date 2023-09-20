<script setup>
import { NButton } from 'naive-ui'
import { ref } from 'vue'
import api from '/API/api.js'
import * as imageConversion from 'image-conversion'

const props = defineProps(['src', 'imgSize', 'onlyRead'])
const emit = defineEmits(['update:src'])
const file = ref(props.src)
// 压缩图片

const update = () => {
  const inputImg = document.getElementById('inputImg')
  inputImg.click()
  inputImg.addEventListener('change', handle)
}
const handle = () => {
  const inputImg = document.getElementById('inputImg')
  const formData = new FormData()
  imageConversion.compress(inputImg.files[0], { quality: 0.8, type: 'image/jpeg' }).then((compressedBlob) => {
    const fileName = inputImg.files[0].name
    formData.append('image', compressedBlob, fileName) // 设置文件名为compressed_image.jpg
    inputImg.removeEventListener('change', handle)
    api.update(formData).then((res) => {
      console.log(res)
      const newFile = res.data.full_url
      file.value = newFile
      emit('update:src', newFile)
      // 清空文件输入框的值
      inputImg.value = ''
    })
  })
}
</script>

<template>
  <img :src="file" :width="imgSize ? imgSize[0] : 100" :height="imgSize ? imgSize[1] : 100" v-show="file !== ''" />
  <div v-if="!onlyRead">
    <input type="file" id="inputImg" accept="image/png, image/jpeg" multiple="false" />
    <n-button type="primary" v-show="file === ''" @click="update">提交图片</n-button>
    <n-button type="warning" v-show="file !== ''" @click="update">更改图片</n-button>
  </div>
</template>

<style scoped>
img {
  border-radius: 5px;
  margin-bottom: 10px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

#inputImg {
  width: 0;
  height: 0;
}
</style>
