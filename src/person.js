class Person{
    constructor(name, place, role){

        this.name = name;
        this.place = place;
        this.role = role;
    }

    display(){


        let str = `Person class : Hello, ${this.name}, Welcome to ${this.place}`;
        console.log(str);
    }

}

class Student extends Person{
    display(){
        console.log("This is child Student class");
        let str = `Student class: Hello, ${this.name}, Welcome to ${this.place}, your role is ${this.role}`;
        console.log(str);
    }
}

class Employee extends Person{

}
let s1 = new Student("Anil","Delhi","Fresher");
s1.display();
console.log(s1.name);

let emp = new Employee("Manoj","Vizag", "Developer");
emp.display();

let p = new Person("xyz", "Hyderabad","Developer");
p.display();

let mohan = new Person("Mohan", "Hyderabad","Tester");
mohan.display();