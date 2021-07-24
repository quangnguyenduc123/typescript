const e = {
    name: 'Quang',
    priviledges: ['create-user'],
    startDate: new Date()
};
function add(a, b) {
    if (typeof a === 'string' || typeof b === 'string') {
        return a.toString() + b.toString();
    }
    return a + b;
}
function printEmployeeInfor(emp) {
    console.log('Name' + emp.name);
    if ('priviledges' in emp) {
        console.log(emp.priviledges);
    }
}
class Car {
    drive() {
        console.log('Car driving...........');
    }
}
class Truck {
    drive() {
        console.log('Truck driving...........');
    }
    loadCargo() {
        console.log('Loading');
    }
}
const v1 = new Car();
const v2 = new Truck();
function useVehicle(vehicle) {
    vehicle.drive();
    if (vehicle instanceof Truck) {
        vehicle.loadCargo();
    }
}
useVehicle(v1);
useVehicle(v2);
const errorBag = {
    id: 'abc',
    email: 'invalid email',
    username: 'must have Upper case'
};
//# sourceMappingURL=app.js.map