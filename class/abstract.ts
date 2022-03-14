abstract class AbstractPerson{
    protected _name: string = 'Park';

    abstract setName(name: string): void;
}

// new AbstractPerson()

class abPerson extends AbstractPerson{
    setName(name: string): void {
        this._name = name;
    }
}

const pp = new abPerson();
pp.setName("HaHa");