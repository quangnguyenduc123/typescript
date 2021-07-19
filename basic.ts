function add(n1: number, n2: number){
    return n1+n2;
}

//const num1 = 5 // if we pass '5' => when tsc app.ts => error, but its not best practice, 
// best practice:
let num1 : number// check num1 is wrong type or not, if we dont check, we can pass num1 as string to add function => error result
num1 = 5 

const num2 = 2.6

const result = add(num1, num2)

console.log(result)