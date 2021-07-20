abstract class Dept {
    protected employees: string[] = []; // proteced that allows child Class can access it
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
    abstract detail(): void
}

class It extends Dept {
    detail(): void {
        console.log('This is IT Department');
    }
    admins: string[]
    private budget: number
    //static property
    static startHour = 8;
    constructor(id: string, admins: string[], budget: number) {
        console.log(It.startHour) // access static property by Class
        super('IT', id)
        this.admins = admins
        this.budget = budget
    }
    // getter => read the private property
    get getBudget() {
        if (this.budget > 0) return this.budget
        throw new Error('No budget')
    }
    // setter => update the private property
    set setBudget(budget: number) {
        this.budget = budget
    }

    // Override method
    addEmployee(name: string) {
        if (name === 'Max') return;
        this.employees.push(name)
    }

    addAdmins(admin: string) {
        this.admins.push(admin)
    }
    // static method
    static describe() {
        return 'It stands for Information technology'
    }
    
}

class Accounting extends Dept {
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

const itDept = new It('it1', ['quang', 'binh'], 0)
itDept.addEmployee('lam')
itDept.addAdmins('mi')
itDept.setBudget = 5000
console.log(itDept.getBudget)
console.log(itDept)
console.log(It.describe())
console.log(It.startHour)

const accDept = new Accounting('acc1', ['quang', 'binh'])
accDept.addEmployee('lam')
accDept.addReports('mi')
console.log(accDept)