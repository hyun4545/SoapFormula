import localForage from "localforage";

class LocalStorageService<T> {
  private datas: T[] = [];
  key: string;
  constructor(key: string) {
    this.key = key;
    localForage.getItem<T[]>(key).then((a) => {
      this.datas = a!;
    });
  }

  saveDatas() {
    localForage.setItem(this.key, this.datas);
  }

  addData(data:T) {
    this.datas.push(data);
    this.saveDatas();
  }

  findData(filter:(d:T)=>boolean):T|undefined
  {
    return this.datas.find(filter);
  }

  getDatas()
  {
    return this.datas;
  }

  removeData(item:T) {
    const index = this.datas.indexOf(item);
    if (index >= 0) {
      this.datas.splice(index, 1);
    }
    this.saveDatas();
  }
}

export default LocalStorageService;
