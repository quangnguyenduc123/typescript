function Logger(logString: string) {
    return function (constructor: Function) {
        console.log(logString)
        console.log(constructor)
    }
}

function WithTemplate(template: string, hookId: string) {
    return function (_: Function) {
        const hookEl = document.getElementById(hookId)
        if (hookEl) {
            hookEl.innerHTML = template

        }
    }
}

//@Logger('LOGGING------------')
@WithTemplate('<h1>My Objec>/h1>', 'app')
class Person {
    name = 'Max';
    constructor() {
        console.log('Create a person.....')
    }
    describe() {
        console.log(name)
    }
}

function Log(target: any, propetyName: string | Symbol) {
    console.log('Property decorator')
    console.log(target, propetyName)
}

class Product {
    @Log
    title: string
    private _price: number

    set price(val: number) {
        if (val > 0) this.price = val
        else throw new Error('Invalid')
    }

    constructor(t: string, p: number) {
        this.title = t
        this._price = p
    }
    getFriceWithTax(t: number) {
        return this._price * t / 100 + this._price
    }
}