const person = {
    name: "Quang",
    age: 25
}

//console.log(person.nickname) => error coz nickname is not defined in object person
console.log(person.name)

const person1 : {} = {
    name: "Quang",
    age: 25
}
//console.log(person1.name) => error coz we define person is a object with empty {} => doesnt have property name name => so we have define a object with name, age 

const person2 : {
    age: number;
    name: string;
} = {
    name: "Quang",
    age: 25
}

console.log(person2.name) // now we can access name and age through person2.

const person3 : {
    age: number;
    name: string;
    hobbies: string[];
    role: [number, string]; // we want role have excatly 2 elements, first is number and second is string
} = {
    name: "Quang",
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: [2, 'admin']
}

person3.role.push('admin') // we can use push to push element to tuple role but we can't do person3.role = [0, 'admin', 'admin']
console.log(person3.role)


let favouriteActivities: string[] // strict type => flexible type  : any[]
favouriteActivities = ['Game']


enum Role {ADMIN = 'ABC', READ_ONLY = 4, WRITE = 3};
enum Role1 {ADMIN, READ_ONLY, WRITE};
const person4 : {
    age: number;
    name: string;
    hobbies: string[];
    role: Role; // enum without initialized like Role 1 can be defined as number or Role => value from 0 -> length of enum
} = {
    name: "Quang",
    age: 25,
    hobbies: ['Sports', 'Cooking'],
    role: Role.READ_ONLY, // value is 1
}
console.log(person4.role)