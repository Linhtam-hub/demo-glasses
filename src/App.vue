<template>
  <div id="app">
    <router-link to="/tryglasses">
      <a tyle="button" class="btn-try">Go to try glasses</a>
    </router-link>
    <router-view></router-view>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import product from "./components/product.vue";
export default {
  name: "App",
  components: {
    HelloWorld,
    "product-list": product,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
