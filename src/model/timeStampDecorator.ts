class TimeStampSetting {

    public className: string;
  
    public propName: string;
  
    constructor(className: string, propName: string) {
      this.className = className;
      this.propName = propName;
    }
  }
  
  let timeStampSettings: TimeStampSetting[] = [];
  
  export default 
  {
    timestamp(target: any, propertyKey: string) {
        timeStampSettings.push(new TimeStampSetting(target.constructor.name, propertyKey));
      },

      setTimeStamp(obj: any): boolean {
        let result = false;
        if (obj) {
          let className = obj.constructor.name;
          let props = timeStampSettings.filter(a => a.className == className);
          props?.forEach(prop=>{
            if (prop) {
                obj[prop.propName]=Date.now;
              }
          });
        }
        return result;
      }
  }