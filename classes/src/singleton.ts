class Singleton {
    protected employees: string[] = [];
    private static instance: Singleton;
    private constructor(public name: string, private readonly id: string) {
        this.name = name
        this.id = id
    }
    addEmployee(employee: string) {
        this.employees.push(employee)
    }
    printEmployeeInformation() {
        console.log(this.employees)
    }

    static getInstance() {
        if (this.instance) return this.instance
        this.instance = new Singleton('singleton', 'singleton')
        return this.instance
    }
}

const instance = Singleton.getInstance()
const instance1 = Singleton.getInstance()

console.log(instance, instance1)