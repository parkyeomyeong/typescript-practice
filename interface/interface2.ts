interface Person2{
    name : string;
    age? : number;
}

function hello2(person : Person2): void{
    console.log(`Hi! ${person.name}!`);
}

hello2({ name : "park", age : 25})
hello2({ name : "park"})