<template>
  <h1>gradientDemo</h1>
  <div class="GBackGround">
    <div class="gradientBack">
      <p>{{ message }}</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello!'
    }
  }
}
</script>

<style>
body {
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
}
.GBackGround {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 100%;
  height: 400px;
  background: linear-gradient(to right, #d6acac, #0040ff);
}

.gradientBack {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 15px;
  width: 100%;
  height: 400px;
  background: linear-gradient(to right, #5100ff, #ff0000);
  background-clip: text;
}

.gradientBack p {
  font-size: 200px;
  font-family:'Times New Roman';
  color: transparent;
}


</style>