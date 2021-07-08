<template>
  <div class="container-fluid">
    <v-nav />
    <div style="margin-top: 80px">
      <router-view/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import vNav from "./views/Nav.vue";
import localForage from "localforage";

export default defineComponent({
  setup() {},
  methods: {
    clearForage() {
      localForage.clear();
    },
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
