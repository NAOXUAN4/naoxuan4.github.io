<template>
  <div>
    <h1>Who is rooling? {{ message }}</h1>
    <button @click = "isROLL(names[0])">DAzhu🐷</button>
    <button @click = "isROLL(names[1])">DAlu🫎</button>
    <p>SUM:{{ sum1 }}</p>
    <p>Log:{{log}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'nan',
      log:'',
      names:["dalu","dazhu"],
      sum1:0
    }
  },
  methods:{
    isROLL(who){
        if (who == "dalu") {
            this.message = who
            
        }
        else if(who == "dazhu"){
            this.message = "dazhu"
        }

    }
  },
  watch:{
    message(newMSG,oldMSG){
        this.sum1++
        this.log = ` old ROLL KING is ${oldMSG} ,new is ${newMSG}`     //"old ROLL KING is "+oldMSG+",new is "+newMSG
    }

  }
}
</script>