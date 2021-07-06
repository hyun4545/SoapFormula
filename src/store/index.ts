import { createStore } from "vuex";
import LocalStorageService from "../service/localdataService";

const FORMULA_NAME = "SoapFormulas";
const OILDATA_NAME = "OilDatas";

export default createStore({
  state: {
    soapFormulas: new LocalStorageService(FORMULA_NAME),
    oilDatas: new LocalStorageService(OILDATA_NAME),
  },
});
