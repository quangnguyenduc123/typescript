function add(n1: number, n2: number) {
    return n1 + n2
}

function print(n1: number): void {
    console.log(n1)
}

//let combineValues = add // need to define combineValues as type Function coz when we change combineValues = 4 => could make error
let combineValues: Function
combineValues = add
console.log(combineValues(3, 4))

combineValues = print
// but with that definition above  combineValues can be any function like print => we need to specify parameter types and return type
let combineValues1: (a: number, b: number) => number
combineValues1 = add
console.log(combineValues1(3, 4))


// Function type callback
function addHandler(a: number, b: number, cb: (result: number) => void) {
    const result = a + b
    cb(result)
}
addHandler(4, 5, (result) => {
    console.log(result)
})