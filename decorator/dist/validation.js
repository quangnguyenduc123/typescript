var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
const registerValidators = {};
function Require(target, propName) {
    registerValidators[target.constructor.name] = Object.assign(Object.assign({}, registerValidators[target.constructor.name]), { [propName]: ['required'] });
}
function IsPositive(target, propName) {
    registerValidators[target.constructor.name] = Object.assign(Object.assign({}, registerValidators[target.constructor.name]), { [propName]: ['positive'] });
}
function validate(obj) {
    const objValidatorConfig = registerValidators[obj.constructor.name];
    console.log(registerValidators);
    if (!objValidatorConfig)
        return true;
    let isValid = false;
    for (const prop in objValidatorConfig) {
        for (const validator of objValidatorConfig[prop]) {
            switch (validator) {
                case 'required':
                    isValid = isValid && obj[prop];
                case 'positive':
                    isValid = isValid && obj[prop] > 0;
            }
        }
    }
    return isValid;
}
class Course {
    constructor(t, p) {
        this.title = t;
        this.price = p;
    }
}
__decorate([
    Require
], Course.prototype, "title", void 0);
__decorate([
    IsPositive,
    Require
], Course.prototype, "price", void 0);
const title = '';
const price = NaN;
const course = new Course(title, price);
if (!validate(course)) {
    console.log('failed');
}
//# sourceMappingURL=validation.js.map