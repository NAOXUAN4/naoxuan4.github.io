<template>
  <section>
    <h1>ROOLL DOGE CLICKER</h1>
    <div @click="roll_tgr" class="mainBody">
      <div class="buttons">
        <button @click = "add_dog(name,index)" v-for = "(name,index) in names" :key="index">{{ name }}</button>
        <button @click.stop= "add_xu" :key="2">Daxu</button>
      </div>
      <div class="words">
        <p>who is rolling? is : {{msg}}</p>
        <p></p>
        <p>Socre_Dazhu: {{ counter_z }}</p>
        <p>Socre_DaLu: {{ counter_l }}</p>
        <p>Socre_Xu: {{ counter_x }}</p>
        <p>Sum: {{ sum }}</p>
    </div>
    </div>

    
</section>
  
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

<style scoped>
section{
  display: flex;
  flex-direction: column;
  width: 50%;
  background-color: rgb(37, 88, 199,0.5);
  border-radius: 7px;
}
h1
{
  display: flex;
  justify-content: center;
  font-size: 1em;
  margin-bottom: 10%;
  margin-top: 10%;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.mainBody
{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  background-color: rgb(255, 106, 0);
  border-radius: 10px;
  border: 10px solid blueviolet;
}


.buttons
{
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  font-size: 1em;
  font-family: Georgia, 'Times New Roman', Times, serif;
  background-color: rgb(103, 195, 164,1);
  border-radius: 10px;
  
}

button
{
  width: 33%;
  color: rgba(0, 0, 0,1);
  background-color: blanchedalmond;
  border-radius: 5px;
  border-color: aliceblue;
  font-family: Georgia, 'Times New Roman', Times, serif;
}
.words
{
  display: flex;
  flex-direction: column;
  margin-left: 10%;
  color: rgb(255, 255, 255);
  font-size: 1em;
  font-family: Georgia, 'Times New Roman', Times, serif
}
</style>

