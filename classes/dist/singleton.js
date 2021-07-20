class Singleton {
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
    static getInstance() {
        if (this.instance)
            return this.instance;
        this.instance = new Singleton('singleton', 'singleton');
        return this.instance;
    }
}
const instance = Singleton.getInstance();
const instance1 = Singleton.getInstance();
console.log(instance, instance1);
//# sourceMappingURL=singleton.js.map