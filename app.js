function add(n1, n2) {
    return n1 + n2;
}
//let combineValues = add // need to define combineValues as type Function coz when we change combineValues = 4 => could make error
var combineValues;
combineValues = add;
console.log(combineValues(3, 4));
