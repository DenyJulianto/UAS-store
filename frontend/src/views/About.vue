<template>
    <div class="about-container">
      <div class="about-header">
        <img src="https://via.placeholder.com/800x200" alt="About Jmok Store" class="about-image">
        <h1 class="about-title">About Jmok Store</h1>
      </div>
      <div class="about-content">
        <div class="about-section">
          <i class="icon icon-store"></i>
          <p>Welcome to Jmok Store, your one-stop shop for all your needs. We pride ourselves on providing the best products and services to our customers.</p>
        </div>
        <div class="about-section">
          <i class="icon icon-quality"></i>
          <p>Our mission is to offer a wide range of quality products at affordable prices, ensuring a great shopping experience for everyone.</p>
        </div>
        <div class="about-section">
          <i class="icon icon-heart"></i>
          <p>At Jmok Store, we believe in building long-lasting relationships with our customers through exceptional service and commitment to quality.</p>
        </div>
        <p class="about-footer">Thank you for choosing Jmok Store. We look forward to serving you!</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'About'
  };
  </script>
  
  <style scoped>
  .about-container {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
    font-family: Arial, sans-serif;
  }
  
  .about-header {
    position: relative;
    margin-bottom: 20px;
  }
  
  .about-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
  }
  
  .about-title {
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    background-color: rgba(0, 0, 0, 0.6);
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
  }
  
  .about-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .about-section {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  
  .icon {
    font-size: 40px;
    color: #41B883;
  }
  
  .icon-store:before {
    content: '\f54e'; /* Unicode untuk ikon store */
  }
  
  .icon-quality:before {
    content: '\f560'; /* Unicode untuk ikon quality */
  }
  
  .icon-heart:before {
    content: '\f004'; /* Unicode untuk ikon heart */
  }
  
  .about-footer {
    margin-top: 20px;
    font-size: 18px;
  }
  </style>
  