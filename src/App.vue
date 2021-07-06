<template>
  <div class="vh-100 overflow-hidden">
    <v-nav />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
import vNav from "./views/Nav.vue";

export default defineComponent({
  setup() {

  
  },
  components: {
    vNav,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
