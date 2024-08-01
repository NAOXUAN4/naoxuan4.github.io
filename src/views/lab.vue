<template>
  <div class="Labs">
    <div class="title"
    :class="[`title`, { 'hovered': titleHovered }]"
    @mouseover="titleHovered = true"
    @mouseleave="titleHovered = false"
    :style="{ backgroundImage: `url(${titlebgUrl})`}"
    >
        <p>{{ message }}</p>
    </div>

    <div>
    
    <ListDemo />
    <invoDemo />
    <eventDemo1 />
    <eventControler />
    <ArrayList />
    <computedDemo />
    <styleDemo />
    <watcherDemo />
    <form_vmodelDemo />
    <glassDemo />
    <darkHasDemo />
    <gradientDemo />
    </div>
    
  </div>
</template>

<script>
import ListDemo from "@/components/listDemo.vue"
import invoDemo from "@/components/invoDemo.vue"
import eventDemo from "@/components/eventDemo.vue"
import eventDemo1 from "@/components/eventDemo1.vue"
import eventControler from "@/components/eventControler.vue"
import ArrayList from "@/components/ArrayList.vue"
import computedDemo from "@/components/computedDemo.vue"
import styleDemo from "@/components/styleDemo.vue"
import watcherDemo from "@/components/watcherDemo.vue"
import form_vmodelDemo from "@/components/form_vmodelDemo.vue"
import glassDemo from "@/components/glassDemo.vue"
import darkHasDemo from "@/components/darkHasDemo.vue"
import gradientDemo from "@/components/gradientDemo.vue"

export default {
  data() {
    return {
      message: 'Lab',
      titleHovered: false,
      titlebgUrl:"./iamges/cardbg.jpg"
    }
  },
  components:{
    glassDemo,
    ListDemo,
    invoDemo,
    eventDemo,
    eventDemo1,
    eventControler,
    ArrayList,
    computedDemo,
    styleDemo,
    watcherDemo,
    form_vmodelDemo ,
    gradientDemo,
    darkHasDemo,
    

  }
}
</script>

<style>
#app {
  display: flex;
  flex-direction: column;
}
.Labs {
    padding: 40px;
    display: flex;
    flex-direction: column;
}

.title {
    display: flex;
    flex-direction: column;
    background-size: 20%;   
    background-position: center;
    border-radius: 6px;
    
    transition: all 0.5s ease;
}

.title p {
    justify-content: center;
    align-items: center;
    font-size: 36px;
    font-family:'Times New Roman';
    font-weight: 200;
    position: relative;
    z-index: 1;
    padding: 20px;
    color: rgb(255, 255, 255);
    height: 100%;
    display: flex;
    flex-direction: column;
}

.title.hovered {
    transform: scale(1.03);
    background-size: 40%;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
  }


</style>