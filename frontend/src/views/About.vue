<template>
    <div class="about-container">
      <div class="about-header">
      </div>
      <div class="about-content">
        <div class="about-section">
          <i class="icon icon-store"></i>
          <p>Selamat datang di Jmok Store, toko serba ada untuk semua kebutuhan Anda. Kami bangga dapat menyediakan produk dan layanan terbaik kepada pelanggan kami.</p>
        </div>
        <div class="about-section">
          <i class="icon icon-quality"></i>
          <p>Misi kami adalah menawarkan berbagai macam produk berkualitas dengan harga terjangkau, memastikan pengalaman berbelanja yang menyenangkan bagi semua orang.
          </p>
        </div>
        <div class="about-section">
          <i class="icon icon-heart"></i>
          <p>Di Jmok Store, kami percaya dalam membangun hubungan jangka panjang dengan pelanggan kami melalui layanan luar biasa dan komitmen terhadap kualitas.</p>
        </div>
        <p class="about-footer">Terima kasih telah memilih Toko Jmok. Kami berharap dapat melayani Anda!</p>
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