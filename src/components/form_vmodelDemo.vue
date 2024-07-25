<template>
  <div>
    <p>roll doge name: {{ name1 }}</p>
    <form>
        <input type="text" v-model.lazy="name1">
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name1:""

    }
  }
}
</script>