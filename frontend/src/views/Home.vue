<template>
    <div id="home">
      <div class="hero">
        <h1>Selamat Datang Di Jk Store</h1>
        <p>Toko serba ada untuk semua kebutuhan Anda!</p>
        <router-link :to="{ name: 'product' }">
          <button>Belanja Sekarang</button>
        </router-link>
      </div>
      <div class="featured-products">
        <h2>Featured Products</h2>
        <div class="product-list">
          <div class="product" v-for="product in featuredProducts" :key="product.id">
            <img :src="product.image" :alt="product.name">
            <h3>{{ product.name }}</h3>
            <p>{{ product.price | currency }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        featuredProducts: [
          {
            id: 1,
            name: 'Produk 1',
            price: 29.99,
            image: '/img/photo-1.jpg'
          },
          {
            id: 2,
            name: 'Produk 2',
            price: 19.99,
            image: 'https://via.placeholder.com/150'
          },
          {
            id: 3,
            name: 'Produk 3',
            price: 39.99,
            image: 'https://via.placeholder.com/150'
          },
          {
            id: 4,
            name: 'Produk 4',
            price: 49.99,
            image: 'https://via.placeholder.com/150'
          }
        ]
      };
    },
    filters: {
      currency(value) {
        return '$' + parseFloat(value).toFixed(2);
      }
    }
  };
  </script>
  
  <style scoped>
  #home {
    padding: 20px;
  }
  .hero {
    text-align: center;
    background-color: #f5f5f5;
    padding: 50px 20px;
    margin-bottom: 30px;
    border-radius: 10px;
  }
  .hero h1 {
    margin: 0;
    font-size: 36px;
    color: #41B883;
  }
  .hero p {
    font-size: 18px;
    color: #555;
  }
  .hero button {
    padding: 10px 20px;
    background-color: #41B883;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    margin-top: 20px;
  }
  .hero button:hover {
    background-color: #39A77B;
  }
  .featured-products {
    text-align: center;
  }
  .featured-products h2 {
    font-size: 24px;
    color: #41B883;
  }
  .product-list {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
  .product {
    background-color: white;
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 20px;
    margin: 10px;
    width: 200px;
    text-align: center;
  }
  .product img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #ddd;
    margin-bottom: 10px;
  }
  .product h3 {
    font-size: 18px;
    color: #333;
    margin: 0 0 10px;
  }
  .product p {
    font-size: 16px;
    color: #555;
  }
  </style>