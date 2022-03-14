class Person {
    name;

    constructor(name: string){
        this.name = name;
    }
}

class Person2 {
    name: string = "unknown";
    //일시적으로 당장 초기화를 막아줌
    //뜻은 언젠가 초기화 할테니 기다려!
    age!: number;
    
    constructor(age : number){
        this.age = age
    }
}

class Person3 {
    constructor(private _name : string, private age : number){}

    get name(){
        return this._name;
    }

    set name(n : string){
        this._name = n;
    }
}

class Person4 {

    public readonly name : string = "Park";
    private readonly country : string = "Korea";
    
    constructor(private _name : string, private age : number){};
}
const p1 = new Person("Mark");
const p3 = new Person3("Park", 25);

console.log(p1);
console.log(p3);
console.log(p3.name);
