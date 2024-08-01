<template>
    <div class  = "backGround">
        <div class = "glass">
            {{ message }}
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello Vue!'
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
    background-image: url("./iamges/glass1.jpg");
}


.glass {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 15px;
    width: 200px;
    height: 150px;
    color: #0c0c0cb5;
    backdrop-filter: blur(10px);
    border: 1px solid #b7d4f6d0;
    
}



</style>