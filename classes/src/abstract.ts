abstract class Dept1 { // class must be abstract
    protected employees: string[] = [];
    constructor(public name: string, private readonly id: string) {
        this.name = name
        this.id = id
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    printEmployeeInformation() {
        console.log(this.employees)
    }
    // abstract method
    abstract detail(): void
}

class ItDept extends Dept {
    detail(): void { // child class must implement all abstract methods
        console.log('This is IT Department');
    }
    admins: string[]
    private budget: number
    constructor(id: string, admins: string[], budget: number) {
        console.log(It.startHour)
        super('IT', id)
        this.admins = admins
        this.budget = budget
    }
    addAdmins(admin: string) {
        this.admins.push(admin)
    }
}

class AccountingDept extends Dept1 {
    detail(): void {
        console.log('This is Accounting Department');
    }
    reports: string[]
    constructor(id: string, reports: string[]) {
        super('Account', id)
        this.reports = reports
    }

    addReports(report: string) {
        this.reports.push(report)
    }
}