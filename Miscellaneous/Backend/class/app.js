
class Person {
    constructor(name, age) {
        console.log("person class constructors");
        this.name = name;
        this.age = age;
    }
    talk() {
        console.log(`Hi,I am ${this.name}`);
    }
}





class Student extends Person {
    constructor(name, age, marks) {
        console.log("student class constructors");
        super(name, age);
        this.marks = marks;
    }

}

let stu1 = new Student("admin", 45, 99);
class Teachers extends Person {
    constructor(name, age, subject) {

        this.subject = subject
    }

}