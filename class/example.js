"use strict";
class Person {
    constructor(name) {
        this.name = name;
    }
}
class Person2 {
    constructor(age) {
        this.name = "unknown";
        this.age = age;
    }
}
class Person3 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
    }
    get name() {
        return this._name;
    }
    set name(n) {
        this._name = n;
    }
}
class Person4 {
    constructor(_name, age) {
        this._name = _name;
        this.age = age;
        this.name = "Park";
        this.country = "Korea";
    }
    ;
}
const p1 = new Person("Mark");
const p3 = new Person3("Park", 25);
console.log(p1);
console.log(p3);
console.log(p3.name);
