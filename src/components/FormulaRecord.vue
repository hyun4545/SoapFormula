<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">配方紀錄</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="list-group" style="text-align: left">
            <button v-for="item in formulas" v-bind:key="item.id"
              type="button"
              class="list-group-item list-group-item-action d-flex"
              data-bs-dismiss="modal"
              @click="selectFormula(item.id)"
            >
             {{item.name}}
              <span class="material-icons-outlined ms-auto">
                arrow_forward_ios
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  data()
  {
    return {
      formulas:this.$soapFormulas.getDatas()
    }
  },
  methods:
  {
    selectFormula(id:string)
    {
        this.$router.push({ name: 'Formula', params: { id: id } })
    }
  }
  
});
</script>

<style lang="scss" scoped>

</style>
