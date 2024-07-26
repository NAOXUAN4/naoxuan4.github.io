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
          :style="{ backgroundImage: `url(${card.backgroundImage})`, backgroundColor:card.color }"    
          
        >
          <div class="card-content">
            <h2>{{ card.title }}</h2>
            <p>{{ card.description }}</p>
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
            link: "/blog", 
            isHovered: false,
            backgroundImage: "",
            color:"red"
          },
          { 
            title: "ProJects", 
            description: "", 
            link: "/projects", 
            isHovered: false,
            backgroundImage: "",
            color:"blue"
          },
          { 
            title: "AboutYian", 
            description: "", 
            link: "/about", 
            isHovered: false,
            backgroundImage: "iamges/yian.png",
            color:"#50aca1"
          },
          { 
            title: "Lab", 
            description: "实验场", 
            link: "/contact", 
            isHovered: false,
            backgroundImage: "",
            color:"#ef5989"
          },
          { 
            title: "Gallery", 
            description: "", 
            link: "/portfolio", 
            isHovered: false,
            backgroundImage: "",
            color:"#01d47a"
          }
        ]
      }
    }
  }
  </script>
  
  <style>
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #242424;
  }
  
  .nav-page {
    width: 100%;
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    background-color: #242424;
  }
  
  h1 {
    text-align: center;
    color: #2c3e50;
    margin-bottom: 30px;
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
    background-size: cover;
    background-position: center;
    border-radius: 6px;
    transition: all 0.3s ease;
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
    background: rgba(0, 0, 0, 0.5);
    transition: background 0.3s ease;
  }
  
  .card-content {
    position: relative;
    z-index: 1;
    padding: 20px;
    color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  
  .card.hovered {
    transform: scale(1.05);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  }
  
  .card.hovered::before {
    background: rgba(0, 0, 0, 0.7);
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
  
  .card a:hover {
    background-color: #2980b9;
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