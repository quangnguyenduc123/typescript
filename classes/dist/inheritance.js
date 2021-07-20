class Dept {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
        this.name = name;
        this.id = id;
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInformation() {
        console.log(this.employees);
    }
}
class It extends Dept {
    constructor(id, admins, budget) {
        console.log(It.startHour);
        super('IT', id);
        this.admins = admins;
        this.budget = budget;
    }
    detail() {
        console.log('This is IT Department');
    }
    get getBudget() {
        if (this.budget > 0)
            return this.budget;
        throw new Error('No budget');
    }
    set setBudget(budget) {
        this.budget = budget;
    }
    addEmployee(name) {
        if (name === 'Max')
            return;
        this.employees.push(name);
    }
    addAdmins(admin) {
        this.admins.push(admin);
    }
    static describe() {
        return 'It stands for Information technology';
    }
}
It.startHour = 8;
class Accounting extends Dept {
    constructor(id, reports) {
        super('Account', id);
        this.reports = reports;
    }
    detail() {
        console.log('This is Accounting Department');
    }
    addReports(report) {
        this.reports.push(report);
    }
}
const itDept = new It('it1', ['quang', 'binh'], 0);
itDept.addEmployee('lam');
itDept.addAdmins('mi');
itDept.setBudget = 5000;
console.log(itDept.getBudget);
console.log(itDept);
console.log(It.describe());
console.log(It.startHour);
const accDept = new Accounting('acc1', ['quang', 'binh']);
accDept.addEmployee('lam');
accDept.addReports('mi');
console.log(accDept);
//# sourceMappingURL=inheritance.js.map