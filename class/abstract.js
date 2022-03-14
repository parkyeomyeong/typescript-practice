"use strict";
class AbstractPerson {
    constructor() {
        this._name = 'Park';
    }
}
// new AbstractPerson()
class abPerson extends AbstractPerson {
    setName(name) {
        this._name = name;
    }
}
const pp = new abPerson();
pp.setName("HaHa");
