var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookId) {
    return function (_) {
        const hookEl = document.getElementById(hookId);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log('Create a person.....');
    }
    describe() {
        console.log(name);
    }
};
Person = __decorate([
    WithTemplate('<h1>My Objec>/h1>', 'app')
], Person);
function Log(target, propetyName) {
    console.log('Property decorator');
    console.log(target, propetyName);
}
class Product {
    constructor(t, p) {
        this.title = t;
        this._price = p;
    }
    set price(val) {
        if (val > 0)
            this.price = val;
        else
            throw new Error('Invalid');
    }
    getFriceWithTax(t) {
        return this._price * t / 100 + this._price;
    }
}
__decorate([
    Log
], Product.prototype, "title", void 0);
//# sourceMappingURL=app.js.map