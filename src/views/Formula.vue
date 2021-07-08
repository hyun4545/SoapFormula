<template>
  <div id="formula" class="container h-100 overflow-auto">
    <div class="row">
      <div class="col-md-8 col-sm-12">
        <div class="d-flex gap-2 justify-content-end">
          <button
            class="nav-btn"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <span class="material-icons-outlined"> history </span>歷史紀錄
          </button>
          <button class="nav-btn">
            <span class="material-icons-outlined"> add </span>新增
          </button>
          <button class="nav-btn" @click="saveFormula()">
            <span class="material-icons-outlined"> save </span>儲存
          </button>
          <button v-if="id" class="nav-btn" @click="deleteFormula()">
            <span class="material-icons-outlined"> delete </span>刪除
          </button>
          <button class="nav-btn">
            <span class="material-icons-outlined"> remove_red_eye </span>預覽
          </button>
        </div>

        <div class="input-group my-3">
          <input type="text" class="form-control" placeholder="輸入配方名稱" />
        </div>

        <!-- 原料油列表 -->
        <div class="card mx-auto mt-3">
          <div class="card-header d-flex align-items-center">
            原料油列表
            <button class="btn btn-primary ms-auto" @click="addOilItem">
              +新增原料油
            </button>
          </div>
          <table class="table">
            <thead>
              <tr>
                <th scope="col">原料油品名</th>
                <th scope="col">公克(g)</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              <template v-for="item in formula.oilItems" v-bind:key="item.id">
                <tr>
                  <td style="width: 60%">
                    <select class="form-control">
                      <option>11</option>
                    </select>
                  </td>
                  <td><input type="text" class="form-control" /></td>
                  <td><button @click="removeOilItem(item)">-</button></td>
                </tr>
              </template>
            </tbody>
          </table>
        </div>
      </div>

      <!-- 計算結果 -->
      <div class="col-md-4 col-sm-12 pb-5 pt-3">
        <div class="accordion">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button
                class="accordion-button"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                計算結果
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordionExample"
            >
              <div id="output-body" class="accordion-body">
                <ul class="list-group list-group-flush">
                  <li class="outcome-list">
                    NaOH:
                    <div class="input-group px-3" style="min-width: 150px">
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="formula.alkali_per++"
                      >
                        +
                      </button>
                      <input
                        type="text"
                        class="form-control"
                        v-model="formula.alkali_per"
                      />
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="formula.alkali_per--"
                      >
                        -
                      </button>
                    </div>
                    %
                  </li>
                  <li class="outcome-list">
                    NaOH:
                    <input
                      type="text"
                      class="form-control w-50"
                      v-model="alkali"
                      disabled
                    />
                    g
                  </li>
                  <li class="outcome-list">
                    x
                    <select class="form-select" v-model="formula.water_per">
                      <option>2.6</option>
                      <option>2.8</option>
                    </select>
                  </li>
                  <li class="outcome-list">
                    = H2O:
                    <input
                      type="text"
                      class="form-control w-50"
                      v-model="water"
                      disabled
                    />
                    g
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <record-component />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import recordComponent from "../components/FormulaRecord.vue";
import { OilItem, SoapFormula } from "../model/models";

export default defineComponent({
  props: {
    id: {
      type: String,
      required: false,
      default: undefined,
    },
  },
  components: {
    recordComponent,
  },
  data() {
    let localData = this.$soapFormulas.getDatas()?.find((a) => a.id == this.id);
    if (!localData) {
      localData = new SoapFormula();
      localData.water_per = 2.6;
      localData.alkali_per = 100;
      localData.oilItems = new Array<OilItem>();
    }
    return {
      isFirstMounte: true,
      formula: localData,
    };
  },
  beforeUpdate() {
    console.log("formula beforeUpdate!!");
    this.isFirstMounte = false;
  },
  computed: {
    alkali(): number {
      let alkaliVal: number = 0;
      if (this.isFirstMounte && !this.id) {
        alkaliVal = this.formula.alkali;
      } else {
        this.formula.oilItems.forEach((oil) => {
          let oilData = this.$oilDatas
            .getDatas()
            ?.find((a) => a.id == oil.oil_id);
          if (oilData) {
            alkaliVal += oilData.naoh_per * oil.gram;
          }
        });
      }
      return alkaliVal;
    },
    water(): number {
      let val: number;
      if (this.isFirstMounte && !this.id) {
        val = this.formula.h2o;
      } else {
        val = this.formula.alkali * this.formula.water_per;
      }
      return val;
    },
  },
  methods: {
    //新增原料油
    addOilItem() {
      this.formula.oilItems.push(new OilItem());
    },
    //移除原料油
    removeOilItem(id: string) {
      let data = this.formula.oilItems.find((a) => a.oil_id == id);
      let index = this.formula.oilItems.indexOf(data!);
      if (index >= 0) {
        this.formula.oilItems.splice(index, 1);
      }
    },
    //儲存配方
    saveFormula() {
      this.$soapFormulas.addData(this.formula);
    },
    //刪除配方
    deleteFormula() {
      this.$soapFormulas.removeData(this.formula);
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

.outcome-list {
  @extend .list-group-item, .d-flex, .gap-2, .align-items-center;
}
</style>
