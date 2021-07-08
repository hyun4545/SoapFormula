<template>
  <div style="cursor: pointer" 
  @mouseenter="isCardDark = true"
  @mouseleave="isCardDark=false">
    <div :class="{card:true, 'border-dark':isCardDark}" style="text-align: left">
      <div class="card-header">
        <h4>{{ oilData.cname }}</h4>
        <p class="m-0">{{ oilData.name }}</p>
      </div>
      <div class="card-body">
        <p class="card-text">
          皂化價（NaOH/KOH): {{ oilData.naoh_per }} / {{ oilData.koh_per }}
        </p>
        <p class="card-text">INS值：{{ oilData.ins_val }}</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { OilData } from "@/model/models";
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    oilData: {
      type: OilData,
      required: true,
    }
  },
  data()
  {
    return {
      isCardDark:false
    }
  }
});
</script>

<style lang="scss" scoped>
@import "bootstrap/scss/bootstrap";
.cardDark {
   @extend .text-white,.bg-dark;
}
</style>
