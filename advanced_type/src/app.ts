type Admin = {
    name: string;
    priviledges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElavatedEmployee = Admin & Employee

const e: ElavatedEmployee = {
    name: 'Quang',
    priviledges: ['create-user'],
    startDate: new Date()
}

type Combinable = string | number;    // pipe means number OR string
type Numeric = number | boolean

type Universal = Combinable & Numeric

function add(a: Combinable, b: Combinable) {
    if (typeof a === 'string' || typeof b === 'string') { // cant use && coz TS doesnt know that either a or b is string so use || or if else
        return a.toString() + b.toString();
    }
    return a + b
}

type UnknownEmployee = Employee | Admin;

function printEmployeeInfor(emp: UnknownEmployee) {
    console.log('Name' + emp.name)
    //console.log(emp.priviledges) => error coz only Admin has property priviledges so we have to check with class we can use instanceof
    // can't check if (emp.priviledges)
    if ('priviledges' in emp) {
        console.log(emp.priviledges)
    }
}

class Car {
    name: 'car' // defined mutual property in classes to check type of Class or interface,...
    drive() {
        console.log('Car driving...........')
    }
}

class Truck {
    name: 'truck'
    drive() {
        console.log('Truck driving...........')
    }

    loadCargo() {
        console.log('Loading')
    }
}

type Vehicle = Car | Truck

const v1 = new Car()
const v2 = new Truck()

function useVehicle(vehicle: Vehicle) {
    vehicle.drive()
    if (vehicle instanceof Truck) {
        vehicle.loadCargo()
    }
}

useVehicle(v1)
useVehicle(v2)


interface ErrorContainer { // email: 'invalid email' username: 'must have Upper case' ,...
    id: string,
    [prop: string]: string
}

const errorBag: ErrorContainer = {
    id: 'abc',
    email: 'invalid email',
    username: 'must have Upper case'
    // add more whatever u want
}