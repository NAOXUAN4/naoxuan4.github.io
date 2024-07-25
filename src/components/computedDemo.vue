<template>
  <div>
    <h1>WHO is ROLL ? is :{{ WHOIS }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: 
      {
            dazhu:100,
            dalu:50
      }
    }
  },
  computed:{
    WHOIS(){
        return this.names.dazhu > this.names.dalu?"DAzhu":"DALU"  //计算是属性
    }
    
  }
}
</script>