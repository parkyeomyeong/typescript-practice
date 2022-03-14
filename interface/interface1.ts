interface Person1{
    name : string,
    age : number
}

function hello1(person : Person1) : void{
    console.log(`Hi ${person.name} `);
}

const p1 : {name : string, age : number} = {
    name : "park",
    age : 24
};

hello1(p1)