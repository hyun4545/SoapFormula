

import { defineComponent } from "vue";
const className = "is-invalid";
export default defineComponent({
    data() {
        return {
            require_handlers: new Array<Function>(),
            elements: new Array<HTMLElement>()
        };
    },
    methods: {
        validate(): boolean {
            return this.require_handlers.every(a => a);
        },
        clearRequire() {
            this.elements.forEach((a: HTMLElement) => {
                a.classList.remove(className);
            });
        }
    },
    directives: {
        require: function (el, binding) {
            let _el = el as HTMLElement;
            if (_el) {
                this.elements.push(_el);
                this.require_handlers.push((): boolean => {
                    if (binding.value) {
                        _el.classList.remove(className);
                        return true;
                    }
                    else {
                        _el.classList.add(className);
                        return false;
                    }
                });
            }
        }
    }
})