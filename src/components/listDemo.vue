<template>
    <h3>list Render</h3>
    
    <p v-for =  "(item,index) in names" :key="index">{{ item }} : {{ index }}</p>
    <div v-for = "item1 of result">
        <p>{{ item1.name }}</p>
        <img :src = "item1.url" alt="">
    </div>
</template>

<script>

export default {
    data(){
        return{
            names:["roll","juangou"],
            result:[{
                        "id":1,
                        "ti":"Dazhu",
                        "url":"https://img1.baidu.com/it/u=2402098011,1599406319&fm=253&fmt=auto&app=120&f=JPEG?w=756&h=500",
                    },
                    {
                        "id":2,
                        "ti":"Dalu",
                        "url":"https://img0.baidu.com/it/u=2302208481,876673036&fm=253&fmt=auto&app=138&f=JPEG?w=889&h=500",
                    }
                    ]
        }
    }
}

</script>