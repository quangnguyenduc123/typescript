interface ValidatorConfig {
    [property: string]: {
        [validatebleProp: string]: string[]
    }
}
const registerValidators: ValidatorConfig = {}
function Require(target: any, propName: string) {
    registerValidators[target.constructor.name] = {
        ...registerValidators[target.constructor.name],
        [propName]: ['required']
    }
}
function IsPositive(target: any, propName: string) {
    registerValidators[target.constructor.name] = {
        ...registerValidators[target.constructor.name],
        [propName]: ['positive']
    }
}
function validate(obj: any) {
    const objValidatorConfig = registerValidators[obj.constructor.name]
    console.log(registerValidators)
    if (!objValidatorConfig) return true
    let isValid = false
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
    return isValid
}
class Course {
    @Require
    title: string
    @IsPositive
    @Require
    price: number
    constructor(t: string, p: number) {
        this.title = t
        this.price = p
    }
}

const title = ''
const price = NaN

const course = new Course(title, price)

if (!validate(course)) {
    console.log('failed')
}