/**
 * Interface for function that takes two numbers as arguments, and returns
 * a number.
**/
interface TwoNumberFunction {
    (x: number, y: number): number,
}

// simple function: adds two numbers
function add(x: number, y: number): number {
    return x + y;
}

// 'add' is a function that takes two numbers and returns a
// number, so it matches the interface's requirements:
const func: TwoNumberFunction = add;
func(1, 2); // = 3

interface Named {
    readonly name: string
    lastname?: string // optional property,
    hi?(phrase: string): void; // optional method // Person or Greetable dont need to implement
}

interface Greetable extends Named {
    greet(phrase: string): void;
}


class Person implements Greetable {
    name: string;
    constructor(n?: string) { // optional parameter
        if (n) {
            this.name = n
        }
    }
    greet(phrase: string): void {
        throw new Error("Method not implemented.");
    }
}

let user: Greetable
user = new Person("Quang")
//user.name = 'Lam' => can set user.name coz name is readonly