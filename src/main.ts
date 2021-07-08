import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import 'bootstrap';
import "bootstrap/dist/css/bootstrap.css";
import "material-icons/iconfont/material-icons.css";
import LocalStorageService from "./service/localdataService";
import { FeatureType, OilData, SoapFormula, SortCoulmn } from "./model/models";
import settingData from "@/model/settingData";

const FORMULA_NAME = "SoapFormulas";
const FEATURE_NAME = "OilFeatures"
const OILDATA_NAME = "OilDatas";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $soapFormulas: LocalStorageService<SoapFormula>;
    $oilDatas: LocalStorageService<OilData>;
    $oilFeatures: LocalStorageService<FeatureType>;
    $sortColumns: Array<SortCoulmn>;
  }
}

const app = createApp(App);

app.config.globalProperties.$soapFormulas = new LocalStorageService<SoapFormula>(FORMULA_NAME);
app.config.globalProperties.$oilDatas = new LocalStorageService<OilData>(OILDATA_NAME);
app.config.globalProperties.$oilFeatures = new LocalStorageService<OilData>(FEATURE_NAME);
app.config.globalProperties.$sortColumns = settingData.sortCoulmns;

app.use(router).mount("#app");
