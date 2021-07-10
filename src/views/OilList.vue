<template>
  <div class="row gap-2">
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
      <button class="nav-btn" @click="showEditModal">
        <span class="material-icons-outlined"> add </span>
      </button>
    </div>
  </div>
  <div class="row">
    <div class="col-md-6 col-sm-12">
      特性：
      <select class="form-select">
        <option
          v-for="item in oilFeatures"
          v-bind:key="item.id"
          :value="item.id"
        >
          {{ item.desc }}
        </option>
      </select>
    </div>
    <div class="col-md-6 col-sm-12">
      排序：
      <select class="form-select">
        <option
          v-for="item in sortColumns"
          v-bind:key="item.columnName"
          :value="item.columnName"
        >
          {{ item.text }}
        </option>
      </select>
    </div>
  </div>
  <div class="container">
    <div class="row row-cols-1 row-cols-md-4 g-2">
      <oil-item
        class="col"
        v-for="item in oilList"
        v-bind:key="item.id"
        :oilData="item"
        @click="showEditModal(item)"
      />
    </div>
  </div>

  <oil-edit ref="oilEditModal" :oilData="currentOilItem" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import oilItem from "@/components/OilItem.vue";
import oilEdit from "@/components/OilEdit.vue";
import { OilData, SortCoulmn } from "@/model/models";

export default defineComponent({
  data() {
    return {
      currentOilItem: new OilData(),
      oilList: this.$oilDatas.getDatas(),
      oilFeatures: this.$oilFeatures.getDatas(),
      sortColumns: this.$sortColumns ?? new Array<SortCoulmn>(),
    };
  },
  components: {
    oilItem,
    oilEdit,
  },
  methods: {
    showEditModal(item?: OilData) {
      let elModal = this.$refs.oilEditModal as InstanceType<typeof oilEdit>;
      elModal?.clearData();
      if (item) {
        this.currentOilItem = item;
      }
      elModal?.toggleModal(true);
    },
  },
});
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