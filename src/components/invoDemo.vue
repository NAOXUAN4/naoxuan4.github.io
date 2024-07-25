<template>

<button @click = "count++">ROLL 1 Time 🥰</button>
<p>Roll times are : {{ count }}</p>
</template>

<script>
//存储变量
export default{
    data(){
        return{
            count: 0
        }
    }
}


</script>
