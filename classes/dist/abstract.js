class Dept1 {
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
class ItDept extends Dept {
    constructor(id, admins, budget) {
        console.log(It.startHour);
        super('IT', id);
        this.admins = admins;
        this.budget = budget;
    }
    detail() {
        console.log('This is IT Department');
    }
    addAdmins(admin) {
        this.admins.push(admin);
    }
}
class AccountingDept extends Dept1 {
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
//# sourceMappingURL=abstract.js.map