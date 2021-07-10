import validateDecorator from "./validateDecorator"; 

export class SortCoulmn {
  public columnName: string;

  public text: string;

  constructor(columnName: string, text: string) {
    this.columnName = columnName;
    this.text = text;
  }
}

//原料油特性
export class FeatureType {
  //編號
  public id: number;
  //特性說明
  public desc: string;

  constructor(id: number, desc: string) {
    this.id = id;
    this.desc = desc;
  }
}

//肥皂配方
export class SoapFormula {
  public id!: string;
  //配方名稱
  public name!: string;
  //原料油
  public oilItems!: Array<OilItem>;
  //鹼性比例
  public alkali_per!: number;
  //鹼性(g)
  public alkali!: number;
  //水的乘數
  public water_per!: number;
  //水(g)
  public h2o!: number;

  public p_datetime!:Date;

  //製作季節
  @validateDecorator.require
  public season!: FormulaSeason;
}

export class FormulaSeason {
  public id: string;

  public name: string;

  public num: number;

  constructor(id: string, name: string, num: number) {
    this.id = id;
    this.name = name;
    this.num = num;
  }
}

//原料油配方
export class OilItem {
  //原料油id
  public oil_id!: string;
  //原料油公克
  public gram!: number;
}

//原料油資料
export class OilData {
  public id!: string;

  //中文名稱
  public cname!: string;
  //英文名稱
  public name!: string;
  //皂化價（NaOH）
  public naoh_per!: number;
  //皂化價（KOH）
  public koh_per!: number;
  //INS值
  public ins_val!: number;
  //特性
  public featureId!: number;
  //說明
  public desc!: string;
}
