"use strict";
class Parent {
    constructor(_name, _age) {
        this._name = _name;
        this._age = _age;
    }
    print() {
        console.log(`이름은 ${this._name} 나이는 ${this._age} 입니다.`);
    }
}
const p = new Parent("Park", 25);
p.print();
class Child extends Parent {
    constructor(age) {
        super("Yeo Myeong", age);
    }
}
// const c = new Child("son", 5)
const c = new Child(5);
c.print();
