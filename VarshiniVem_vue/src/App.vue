<template>
  <br>
  <h1 color=white>States in United States of America</h1>
  <div id="app">
    <StatesList />
  </div>
</template>

<script>
import StatesList from "./components/StatesList.vue";

export default {
  name: "App",
  components: {
    StatesList
  }
};
</script>

<style>
body{
  margin:0;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: white;
  background-image: linear-gradient(to top, #30cfd0 0%, #330867 100%); /* Gradient background */
  min-height: 100vh;
  
}

* {
  box-sizing: border-box;
}
</style>
