<template>
  <div @click="roll_tgr">
    <button @click = "add_dog(name,index)" v-for = "(name,index) in names" :key="index">{{ name }}</button>
    <button @click.stop= "add_xu" :key="2">Daxu</button>
  </div>

  <p>who is rolling? is : {{msg}}</p>
  <p></p>
  <p>Socre_Dazhu: {{ counter_z }}</p>
  <p>Socre_DaLu: {{ counter_l }}</p>
  <p>Socre_Xu: {{ counter_x }}</p>
  <p>Sum: {{ sum }}</p>

  
</template>

<script>
export default {
  data() {
    return {

        names:["dazhu","dalu"],
        counter_z:0,
        counter_l:0,
        counter_x:0,
        sum:0,
        msg: "",
        whoisdog:"",

        add_dog(hl,index){
            if (index == 0) {
              this.counter_z ++
            }
            else
            {
              this.counter_l ++
            }
            this.sum++
            
            this.msg = hl
            console.log("ROLLLL")
        },
        add_xu(){
          this.counter_x++
          this.msg = "daxu"

        },
    }
  }
}
</script>