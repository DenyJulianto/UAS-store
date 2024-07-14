<template>
    <div>
      <h2>Search Results</h2>
      <div v-if="results.length">
        <ul>
          <li v-for="product in results" :key="product._id">{{ product.name }}</li>
        </ul>
      </div>
      <div v-else>
        <p>No results found.</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: ['results']
  }
  </script>
  