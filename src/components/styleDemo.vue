<template>
  <div>
    <p :style="{color:color1,fontFamily:font1,fontSize:size1}">你好世界！</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      color1: "#ffff44",
      font1: "FangSong",
      size1:"15px"
    }
  }
}
</script>