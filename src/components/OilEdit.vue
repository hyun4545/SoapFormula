<template>
  <div class="modal fade" ref="editModal">
    <div class="modal-dialog modal-lg">
      <div class="modal-content">
        <div class="modal-header">
          <button class="btn-close" data-bs-dismiss="modal" />
        </div>
        <div class="modal-body modal-fullscreen-md-down">
          <form id="oilEditForm" class="">
            <table>
              <tr>
                <th>原料油名稱</th>
                <td>
                  <table>
                    <tr>
                      <th>中文</th>
                      <td>
                        <input type="text" require v-model="oil_data.cname" />
                        <div class="invalid-feedback">必填</div>
                      </td>
                    </tr>
                    <tr>
                      <th>英文</th>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="oil_data.name"
                        />
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <th>皂化價</th>
                <td>
                  <table>
                    <tr>
                      <th>NaOH</th>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="oil_data.naoh_per"
                          require
                        />
                        <div class="invalid-feedback">必填</div>
                      </td>
                    </tr>
                    <tr>
                      <th>KOH</th>
                      <td>
                        <input
                          type="text"
                          class="form-control"
                          v-model="oil_data.koh_per"
                        />
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
              <tr>
                <th>INS值</th>
                <td>
                  <input
                    type="text"
                    class="form-control"
                    v-model="oil_data.ins_val"
                  />
                </td>
              </tr>
              <tr>
                <th>特性</th>
                <td><select class="form-select"></select></td>
              </tr>
              <tr>
                <th></th>
                <td><button class="btn float-right">+新增特性</button></td>
              </tr>
            </table>
          </form>
        </div>
        <div class="modal-footer">
          <button class="nav-btn">
            <span class="material-icons-outlined"> delete </span>
          </button>
          <button class="nav-btn" @click="saveOilData">
            <span class="material-icons-outlined"> save </span>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { OilData } from "@/model/models";
import { defineComponent } from "vue";
import Modal from "bootstrap/js/dist/modal";
import require from "@/plugin/require_mixin";

export default defineComponent({
  props: {
    oilData: {
      type: OilData,
      required: false,
      default: new OilData(),
    },
  },
  data() {
    return {
      oil_data: new OilData(),
    };
  },
  watch: {
    oilData() {
      let data: OilData = new OilData();
      Object.assign(data, this.$props.oilData);
      this.oil_data = data;
    },
  },
  mounted() {
    this.clearData();
  },
  extends: require,
  methods: {
    clearData() {
      this.oil_data = new OilData();
      this.clearRequire();
    },
    toggleModal(isShow: boolean) {
      let modal = this.$refs.editModal as HTMLElement;
      if (modal) {
        if (isShow) {
          new Modal(modal).show();
        } else {
          new Modal(modal).hide();
        }
      }
    },
    saveOilData() {
      if (this.validate()) {
        this.$oilDatas.addData(this.oil_data);
        this.toggleModal(false);
      }
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
table {
  width: 90%;
}

tr {
  width: 100% !important;
}
th {
  width: 20% !important;
  text-align: right;
  padding-right: 5px;
}
td {
  width: 80% !important;
}
</style>
