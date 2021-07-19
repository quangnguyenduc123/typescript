function combine(n1: number | string, n2: number | string, type: 'number' | 'string') { // use union types to be more reflxible with multiple types,  with type we allow only 2 value: number and string
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2
    else return n1.toString() + n2.toString()
}

const numberCombine = combine(1, 2, 'number')
console.log(numberCombine)
const stringCombine = combine('Duc ', 'Quang', 'string')
console.log(stringCombine)

//Type Alias => create a custom type
type Combinable = number | string
function combine1(n1: Combinable, n2: Combinable, type: 'number' | 'string') {
    let result;
    if (typeof n1 === 'number' && typeof n2 === 'number') return n1 + n2
    else return n1.toString() + n2.toString()
}

function add(n1: number, n2: number): number {// function with return type
    return n1 + n2
}
