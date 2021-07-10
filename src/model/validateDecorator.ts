class VailateSetting {

    public className: string;

    public propName: string;

    constructor(className: string, propName: string) {
        this.className = className;
        this.propName = propName;
    }
}

let validateSettings: VailateSetting[] = [];

export default
    {
        require(target: any, propertyKey: string) {
            validateSettings.push(new VailateSetting(target.constructor.name, propertyKey));
        },

        isValidateObj(obj: any): boolean {
            let result = false;
            if (obj) {
                let className = obj.constructor.name;
                let props = validateSettings.filter(a => a.className == className);
                props?.forEach(prop => {
                    if (prop) {
                        if (obj[prop.propName]) {
                            result = true;
                        }
                    }
                });
            }
            return result;
        }
    }