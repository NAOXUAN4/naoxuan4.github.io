<template>

<button @click = "add_name">ROOl😿ROOL</button>
<ul>
    <li  v-for = "(name,index) in names"  :key = "index">{{ name }}</li>
</ul>

</template>


<script>
export default {
  data() {
    return {
      names: ["🐷","🫎","🤫"],
      name_pre:["🧻","🐶"],
      pre_counter: 0,
      add_name(){
        this.names.push(this.name_pre[((this.pre_counter++))%2])
      }
    }
  }
}
</script>