<template>
  <button @click = "add_Counter('hello')">ROOLLLLL 🐶</button>
  <p>{{msg}}</p>
  <p>ROOLLL TIMMME ISSSS : {{ counter }}</p>
  
</template>

<script>
export default {
  data() {
    return {
        counter:0,
        msg: "",
        add_Counter(hl){
            this.counter +=1
            this.msg = hl
            console.log("ROLLLL")
        }
    }
  }
}
</script>