class Department {
    constructor(n) {
        this.employees = [];
        this.name = n;
    }
    describe() {
        console.log(`This is ${this.name} department`);
    }
    describe1() {
        console.log(`This is ${this.name} department`);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees);
    }
}
const dept = new Department("IT");
console.log(dept);
dept.describe();
const accounting = { describe: dept.describe, describe1: dept.describe1 };
accounting.describe();
const accounting1 = { name: 'Dummy', describe: dept.describe, describe1: dept.describe1 };
dept.addEmployee('Quang');
dept.addEmployee('Binh');
//# sourceMappingURL=app.js.map