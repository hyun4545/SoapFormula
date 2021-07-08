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
                        <input
                          type="text"
                          :class="{
                            'form-control': true,
                            'is-invalid': error_msg.cname,
                          }"
                          v-model="oil_data.cname"
                        />
                        <div class="invalid-feedback">
                          {{ error_msg.cname }}
                        </div>
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
                          :class="{
                            'form-control': true,
                            'is-invalid': error_msg.naoh_per,
                          }"
                        />
                        <div class="invalid-feedback">
                          {{ error_msg.naoh_per }}
                        </div>
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
            <!--div class="d-flex mb-3">
              <label class="">原料油名稱</label>
              <div class="">
                <div class="d-flex flex-fill">
                  <label class="d-block flex-fill">中文</label>
                  <input
                    type="text"
                    class="form-control col-10 flex-fill"
                    v-model="oil_data.cname"
                    required
                  />
                  <div class="invalid-feedback">＊必填</div>
                </div>
                <div class="d-flex">
                  <label class="">英文</label>
                  <input
                    type="text"
                    class="form-control col-8"
                    v-model="oil_data.name"
                  />
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-4 col-form-label">皂化價</label>
              <div class="col-8">
                <div class="row">
                  <label class="col-4 col-form-label">NaOH</label>
                  <input
                    type="text"
                    class="form-control col-8"
                    v-model="oil_data.naoh_per"
                    required
                  />
                  <div class="invalid-feedback">＊必填</div>
                </div>
                <div class="row">
                  <label class="col-4 col-form-label">KOH</label>
                  <input
                    type="text"
                    class="form-control col-8"
                    v-model="oil_data.koh_per"
                  />
                </div>
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-4 col-form-label">INS值</label>
              <div class="col-8">
                <input
                  type="text"
                  class="form-control"
                  v-model="oil_data.ins_val"
                />
              </div>
            </div>
            <div class="row mb-3">
              <label class="col-4 col-form-label">特性</label>
              <div class="col-8">
                <select class="form-select"></select>
              </div>
            </div>
            <div class="row mb-3">
              <button class="btn float-right">+新增特性</button>
            </div-->
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
      error_msg: Object(),
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
  methods: {
    clearData() {
      console.log("clear");
      this.oil_data=new OilData();
      this.error_msg["cname"] = "";
      this.error_msg["naoh_per"] = "";
    },
    showModal()
    {
        let oilModal = this.$refs.editModal as HTMLElement;
        if (oilModal) {
          new Modal(oilModal).show();
        }
    },
    saveOilData() {
      let isValidate = true;
      if (!this.oil_data.cname) {
        this.error_msg.cname = "＊必填";
        isValidate = false;
      }
      if (!this.oil_data.naoh_per) {
        this.error_msg.naoh_per = "＊必填";
        isValidate = false;
      }
      if (isValidate) {
        this.$oilDatas.addData(this.oil_data);
        let oilModal = this.$refs.editModal as HTMLElement;
        if (oilModal) {
          new Modal(oilModal).hide();
        }
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
