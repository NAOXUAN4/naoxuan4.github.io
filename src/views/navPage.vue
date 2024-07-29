<template>
    <div class="nav-page">
      <div class="card-container">
        <a 
          v-for="(card, index) in cards" 
          :key="index" 
          class="card"
          :class="[`card-${index + 1}`, { 'hovered': card.isHovered }]"
          :href = "card.link"
          @mouseover="card.isHovered = true"
          @mouseleave="card.isHovered = false"
          :style="{ backgroundImage: `url(${card.backgroundImage})`}"    
        >
          <div class="card-content">
            <h2>{{ card.title }}</h2>
            <p class = "descrption">{{ card.description }}</p>
          </div>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        cards: [
          { 
            title: "Blog", 
            description: "", 
            link: "#/iyanBase", 
            isHovered: false,
            backgroundImage: "./iamges/glass1.jpg",
            color:"red"
          },
          { 
            title: "ProJects", 
            description: "", 
            link: "#/projects", 
            isHovered: false,
            backgroundImage: "./iamges/cardbg4.jpg",
            color:"blue"
          },
          { 
            title: "About", 
            description: "", 
            link: "#/about", 
            isHovered: false,
            backgroundImage: "./iamges/yian.jpg",
            color:"#50aca1"
          },
          { 
            title: "Lab", 
            description: "实验场", 
            link: "#/Lab",
            isHovered: false,
            backgroundImage: "./iamges/cardbg.jpg",
            color:"#ef5989"
          },
          { 
            title: "Gallery", 
            description: "", 
            link: "#/Gallery", 
            isHovered: false,
            backgroundImage: "./iamges/cardbg2.jpg",
            color:"#01d47a"
          }
        ]
      }
    }
  }
  </script>
  
  <style>
  body {
    background-color: #6e6e6e;
  }
  
  html, body{
  width: 100%;
  display: flex;
  margin: 0px;
  padding: 0px;
  flex-direction: column;
  min-height: 100vh;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
  #app {
    max-width: 2560px;
    width: 100%;
    display: flex;
    margin: 0px;
  }

  .nav-page {
    
    width: 100%;
    min-height: 100vh;
    padding: 10px;
    box-sizing: border-box;
    background-color: #6e6e6e;
    margin: 0 auto;
    
  }
  
  
  .card-container {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    gap: 20px;
    height: 90vh;
    width: 100%;
  }
  

  .card {
    /* 背景尺寸适配 */
    background-size: cover;   
    background-position: center;
    border-radius: 6px;
    transition: all 0.5s ease;
    overflow: hidden;
    position: relative;
  }

  .card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.4);
    transition: background 0.5s ease;
  }

  /* 内容字体 */
  .card-content {   
    position: relative;
    z-index: 1;
    padding: 20px;
    color: rgb(255, 255, 255);
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .card.hovered {
    transform: scale(1.03);
    background-size: 150%;
    background-position: right;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.6);
  }

  .card.hovered::before {
    background-color: rgba(0, 0, 0, 0.6);
    
  }

  .card h2 {
    margin-top: 0;
    font-size: 24px;
    font-family:'Times New Roman';
    font-weight: 200;
  }
  
  .card p {
    flex-grow: 1;
    font-size: 0.5em;
  }


  .card-1 {
    grid-column: 1 / 2;
    grid-row: 1 / 4
    ;
  }
  
  .card-2 {
    grid-column: 2 / 3;
    grid-row: 1 / 3;
  }
  
  .card-3 {
    grid-column: 3 / 5;
    grid-row: 1 / 2;
  }
  
  .card-4 {
    grid-column: 2 / 3;
    grid-row: 3 / 4;
  }
  
  .card-5 {
    grid-column: 3 / 5;
    grid-row: 2 / 4;
  }
  
  @media (max-width: 768px) {
    .card-container {
      grid-template-columns: 1fr;
      grid-template-rows: repeat(5, 1fr);
      height: auto;
    }
  
    .card {
      grid-column: 1 / 2 !important;
      grid-row: auto !important;
      height: 200px;
    }
  }
  

  </style>