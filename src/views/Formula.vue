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
          <button class="nav-btn">
            <span class="material-icons-outlined"> save </span>儲存
          </button>
          <button class="nav-btn">
            <span class="material-icons-outlined"> remove_red_eye </span>預覽
          </button>
        </div>

        <div class="input-group my-3">
          <input type="text" class="form-control" placeholder="輸入配方名稱" />
        </div>

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
              <template v-for="item in oilList" v-bind:key="item.id">
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
              <div class="accordion-body">
                <ul class="list-group list-group-flush">
                  <li class="list-group-item d-flex gap-2 align-items-center">
                    NaOH:
                    <div class="input-group px-3" style="min-width: 150px">
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="plusNaOHPer()"
                      >
                        +
                      </button>
                      <input
                        type="text"
                        class="form-control"
                        v-model="naOHPer"
                      />
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="minusNaOHPer()"
                      >
                        -
                      </button>
                    </div>
                    %
                  </li>
                  <li class="list-group-item d-flex gap-2 align-items-center">
                    NaOH:
                    <input type="text" class="form-control w-50" disabled /> g
                  </li>
                  <li class="list-group-item d-flex gap-2 align-items-center">
                    x
                    <select class="form-select" v-model="waterPer">
                      <option>2.6</option>
                      <option>2.8</option>
                    </select>
                  </li>
                  <li class="list-group-item d-flex gap-2 align-items-center">
                    = H2O:
                    <input type="text" class="form-control w-50" disabled /> g
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

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
            <button
              type="button"
              class="list-group-item list-group-item-action d-flex"
              data-bs-dismiss="modal"
            >
              A second item
              <span class="material-icons-outlined ms-auto">
                arrow_forward_ios
              </span>
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action"
              data-bs-dismiss="modal"
            >
              A third button item
            </button>
            <button
              type="button"
              class="list-group-item list-group-item-action"
              data-bs-dismiss="modal"
            >
              A fourth button item
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";
function uuidv4() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

class OilItem {
  constructor(oil, gram) {
    this.id = uuidv4();
    console.log(this.id);
    this.oil = oil;
    this.gram = gram;
  }
}

export default defineComponent({
  data() {
    return {
      formulaName: "",
      oilList: [new OilItem(), new OilItem()],
      naOHPer: 100,
      waterPer: 2.6,
    };
  },
  computed: {},
  methods: {
    addOilItem() {
      this.oilList.push(new OilItem());
    },
    removeOilItem(item) {
      const index = this.oilList.indexOf(item);
      if (index > -1) {
        this.oilList.splice(index, 1);
      }
    },
    minusNaOHPer() {
      this.naOHPer--;
    },
    plusNaOHPer() {
      this.naOHPer++;
    },
  },
});
</script>


<style scoped lang='scss'>
@import 'bootstrap/scss/bootstrap.scss';

#formula {
  .nav-btn {
    @extend .btn,
      .btn-outline-dark,
      .btn-sm,
      .mt-2,
      .d-flex,
      .align-items-center;
  }
}
</style>
