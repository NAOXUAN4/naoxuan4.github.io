<template>
    <div>
        <h1>Dark Theme Demo</h1>
    </div>
    <div class="Outer">
      <p>Now theme is {{ message }}</p>
      <select class="sel" title="Select Theme" v-model="selecttheme">
        <option value="Light">Light</option>
        <option value="Dark">Dark</option>
      </select>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selecttheme: 'Light',
        message: 'Light'
      }
    },
    watch:{
      selecttheme(newVal){
        this.message = newVal
      }
    }
  }
  </script>
  
  <style>
  .Outer {
    transition: background-color 0.3s, color 0.3s;
    width: 100%;
    height: 500px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    background: var(--background, #ffffff);
    color: var(--text-color, #000000);
  }
  
  .sel {
    width: 100px;
    height: 30px;
  }
  
  .Outer:has(option[value="Dark"]:checked) {
    --background: #000000;
    --text-color: #ffffff;
  }
  
  .Outer:has(option[value="Light"]:checked) {
    --background: #ffffff;
    --text-color: #000000;
  }

  .sel:has(option[value="Dark"]:checked) {
    background-color: #000000;
    color: #ffffff;
  }
  
  .sel:has(option[value="Light"]:checked) {
    color: #000000;
    text-color: #ffffff;
  }
  
  </style>