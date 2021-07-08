import localForage from "localforage";

class LocalStorageService<T> {
  private datas: Array<T> = new Array<T>();
  key: string;
  constructor(key: string) {
    this.key = key;
    localForage.getItem<string>(key).then((a) => {
      if (a) {
        this.datas = JSON.parse(a);
      }
    });
  }

  saveDatas() {
      localForage.setItem<string>(this.key, JSON.stringify(this.datas));
  }

  addData(data: T) {
    this.datas.push(data);
    this.saveDatas();
  }

  getDatas() {
    return this.datas;
  }

  removeData(item: T) {
    const index = this.datas.indexOf(item);
    if (index >= 0) {
      this.datas.splice(index, 1);
    }
    this.saveDatas();
  }
}

export default LocalStorageService;
