import { createApp, reactive } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "material-icons/iconfont/material-icons.css";
import store from "./store";
import LocalStorageService from "./service/localdataService";
import { FeatureType, OilData, SoapFormula, SortCoulmn } from "./model/models";
import settingData from './model/settingData';

const FORMULA_NAME="SoapFormulas";
const FEATURE_NAME="OilFeatures"
const OILDATA_NAME="OilDatas";

declare module '@vue/runtime-core' {
    interface ComponentCustomProperties {
        $soapFormulas:LocalStorageService<SoapFormula>;
        $oilDatas:LocalStorageService<OilData>;
        $oilFeatures:LocalStorageService<FeatureType>;
        $sortColumns:Array<SortCoulmn>;
    }
  }

let app=createApp(App);

app.config.globalProperties.$soapFormulas=reactive(new LocalStorageService<SoapFormula>(FORMULA_NAME));
app.config.globalProperties.$oilDatas=reactive(new LocalStorageService<OilData>(OILDATA_NAME));
app.config.globalProperties.$oilFeatures=reactive(new LocalStorageService<OilData>(FEATURE_NAME));
app.config.globalProperties.$sortColumns=settingData.sortCoulmns;

app.use(store).use(router).mount("#app");
