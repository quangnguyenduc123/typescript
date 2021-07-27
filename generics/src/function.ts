function merge<T, U>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}

const mergedOject = merge({ name: 'Quang' }, { age: 25 })
//console.log(mergedOject.name) without generic ts cant know mergedObject has name property
const mergedOject1 = merge<{ name: string }, { age: number }>({ name: 'Quang' }, { age: 25 }) // pass error u can do that but in reality, when we can't know exactly types we cant do that
console.log(mergedOject.age) // We tell ts that T,U is a certain object not any object

// But the problem is that T and U can be any type like number, string,... => it gets error when T or U are not object => we have to make it more constraint
function merge1<T extends object, U extends object>(objA: T, objB: U) {
    return Object.assign(objA, objB)
}
const merge1Object = merge1({ name: 'Quang' }, { age: 25 })// so T and U have to be object

type Lengthy = {
    length: number
}

function countAnDescribe<T extends Lengthy>(element: T): [T, string] {
    let description = 'Got no value'
    //Coz ts can't know T type has length property or not => we have to describe T extend from a type has length property
    if (element.length) {
        description = `Got ${element.length} value`
    }
    return [element, description]
}