class Department {
    private readonly id: string // readonly property
    name: string;
    private employees: string[] = [];

    // short hand initialization: constructor(public name: string, private readlony id : string) => auto generate 2 properties with same name and modifier
    constructor(n: string) {
        this.name = n
    }
    describe() {
        console.log(`This is ${this.name} department`)
    }

    describe1(this: Department) {
        console.log(`This is ${this.name} department`)
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    printEmployeeInformation() {
        console.log(this.employees)
    }
}

const dept = new Department("IT")
console.log(dept)
dept.describe()

const accounting = { describe: dept.describe, describe1: dept.describe1 }
accounting.describe() // can call describe method with undefined
// accounting.describe1() => can't call describe1

const accounting1 = { name: 'Dummy', describe: dept.describe, describe1: dept.describe1 }
//accounting1.describe1() // => no error

dept.addEmployee('Quang')
dept.addEmployee('Binh')
// dept.employees[2] = 'Lam' can access private field outside class

