<template>
  <div class="d-flex gap-2">
    <div class="d-flex align-items-start">
      <input type="text" class="form-control" />
      <button class="nav-btn">
        <span class="material-icons-outlined"> search </span>
      </button>
    </div>
    <div class="d-flex align-items-end">
      <button class="nav-btn">
        <span class="material-icons-outlined"> filter_alt </span>
      </button>
      <button class="nav-btn">
        <span class="material-icons-outlined"> add </span>
      </button>
    </div>
  </div>

  <div> 
       <div class="d-flex align-items-start">
       特性： <select class="form-select" >
           </select>
    </div>
     <div class="d-flex align-items-start">
       排序： <select class="form-select" >
           </select>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
    data(){
        return {
            oilList:this.$oilDatas,
            oilFeatures:this.$oilFeatures,
            sortColumns:this.$sortColumns
        }
    },
})
</script>

<style scoped lang="scss">
@import "bootstrap/scss/bootstrap";

.nav-btn {
  @extend .btn, .btn-sm, .mt-2, .d-flex, .align-items-center;

  &:not([btn-color]) {
    @extend .btn-outline-dark;
  }

  &[btn-color="dark"] {
    @extend .btn-outline-dark;
  }
}

</style>