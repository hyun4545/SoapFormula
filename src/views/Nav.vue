<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light fiex-top">
    <div class="container-fluid flex-column">
      <div class="container-fluid">
        <button
          class="navbar-toggler float-start"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
          aria-controls="navMenu"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <a class="navbar-brand icon-color" href="#"
          ><span class="material-icons-outlined"> soap </span>打皂APP</a
        >

        <router-link class="d-inline d-sm-none float-end" to="/Login"
          ><span class="material-icons-outlined">
            person_outline
          </span></router-link
        >
      </div>

      <div>
        <div
          class="collapse navbar-collapse justify-content-center"
          id="navMenu"
        >
          <ul class="nav justify-content-center">
            <li class="nav-item menu-item">
              <router-link to="/Formula">Formula</router-link>
            </li>
            |
            <li class="nav-item menu-item">
              <router-link to="/Formula">Oil List</router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <ul class="nav d-none d-sm-block me-3">
      <li class="nav-item">
        <button class="btn btn-primary" @click="$router.push('Login')">
          <span class="material-icons-outlined d-inline align-middle">
            person_outline </span
          >Login
        </button>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.menu-item {
  margin: 0 20px !important;
}

.icon-color {
  font-weight: 600;
  background: -moz-linear-gradient(top, #e7bb2c 0%, #a742c6 100%);
  background: -webkit-linear-gradient(top, #e7bb2c 0%, #a742c6 100%);
  background: linear-gradient(to bottom, #e7bb2c 0%, #a742c6 100%);
  -webkit-background-clip: text;
  -moz-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  
  setup() {},
  data()
  {
  
  }
});
</script>
