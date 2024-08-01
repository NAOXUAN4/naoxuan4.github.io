<template>
    <div class  = "backGround" :style="{ backgroundImage: `url(${glassbgUrl})`}">
        <div class = "glass">
            {{ message }}
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Glass',
      glassbgUrl: "./iamges/glass1.jpg",

    }
  }
}
</script>

<style>

.backGround {
    background-size: cover;
    display: flex;
    flex-direction: column;  
    justify-content: center;     /*子元素的排列*/
    align-items: center;
    width: 500px;
    height: 200px;
}


.glass {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
    width: 200px;
    height: 150px;

    resize: both;

    color: #0c0c0cb5;
    backdrop-filter: blur(10px);
    border: 1px solid #b7d4f6d0;

    font-family:Georgia, 'Times New Roman', Times, serif;
    
}



</style>