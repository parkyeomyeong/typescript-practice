class PersonExtends<T extends string | number>{
    private _name: T;

    constructor(name: T){
        this._name = name;
    }
}

new PersonExtends("Park");
new PersonExtends(25);
// new PersonExtends(true);