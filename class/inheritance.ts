class Parent{
    constructor(protected _name:string, private _age:number){}

    public print():void{
        console.log(`이름은 ${this._name} 나이는 ${this._age} 입니다.`);
    }
}

const p = new Parent("Park", 25);
p.print();

class Child extends Parent{
    constructor(age: number){
        super("Yeo Myeong", age);
    }
}

// const c = new Child("son", 5)
const c = new Child(5);
c.print();