<template>
  <div id="nav-bar">
    <div id="sidebar-toggle">
      <button @click="toggleSidebar">☰</button>
    </div>
    <router-link :to="{ name: 'product' }" id="products-link">
      <h1>Jmok Store</h1>
    </router-link>
    <div id="search-bar">
      <input type="text" placeholder="Search..." v-model="searchQuery">
      <button @click="handleSearch">Search</button>
    </div>
    <router-link :to="{ name: 'cart' }" id="cart-link">
      <button>Cart</button>
    </router-link>
    <router-link :to="{ name: 'login' }" id="login-link">
      <button>Login</button>
    </router-link>
    <div id="sidebar" :class="{ 'sidebar-visible': sidebarVisible }">
      <ul>
        <li><router-link :to="{name: 'home'}">Home</router-link></li>
        <li><router-link :to="{name: 'about'}">About</router-link></li>
        <li><router-link to="#">Item 3</router-link></li>
        <li><router-link to="#">Item 4</router-link></li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: '',
      sidebarVisible: false
    }
  },
  methods: {
    handleSearch() {
      // Implementasikan logika pencarian di sini
      console.log('Searching for:', this.searchQuery);
    },
    toggleSidebar() {
      this.sidebarVisible = !this.sidebarVisible;
    }
  }
}
</script>

<style scoped>
#nav-bar {
  border-bottom: 1px solid #ddd;
  height: 75px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  box-sizing: border-box;
  position: relative;
}
#sidebar-toggle {
  position: absolute;
  left: 16px;
}
#sidebar-toggle button {
  padding: 8px;
  background-color: #41B883;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
#sidebar-toggle button:hover {
  background-color: #39A77B;
}
#products-link {
  color: #41B883;
  font-size: 22px;
  text-decoration: none;
  margin-left: 50px; /* Jarak antara sidebar dan tulisan Jmok Store */
}
#products-link h1 {
  margin: 0;
}
#search-bar {
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}
#search-bar input {
  width: 40%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
#search-bar button {
  padding: 8px 16px;
  background-color: #41B883;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 8px;
  cursor: pointer;
}
#search-bar button:hover {
  background-color: #39A77B;
}
#cart-link, #login-link {
  display: flex;
  align-items: center;
}
#cart-link {
  margin-right: 16px;
}
#sidebar {
  position: fixed;
  top: 75px;
  left: -250px; /* Awalnya tersembunyi di sebelah kiri */
  width: 250px;
  height: calc(100% - 75px);
  background-color: #f5f5f5;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  box-sizing: border-box;
  z-index: 1000;
  transition: left 0.3s ease; /* Animasi transisi */
}
#sidebar.sidebar-visible {
  left: 0; /* Posisikan di dalam layar saat terlihat */
}
#sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
#sidebar ul li {
  margin: 10px 0;
}
#sidebar ul li a {
  text-decoration: none;
  color: #333;
}
#sidebar ul li:hover {
  background-color: #eaeaea;
}
</style>
