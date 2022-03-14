interface Person3{
    name: string;
    age?: number;
    [index : string] : any;
}

function hello3(person : Person3): void{
    console.log(`Hi ${person.name}`);
}

const p31: Person3 ={
    name : "Park",
    age : 25
};

const p32: Person3 = {
    name : "Kim",
    // 임의의 key값 설정 가능
    systers: ["sung", "chan"],
}

const p33: Person3 = {
    name : "Ahn",
    // 임의의 key값 설정 가능
    fater: p31,
    mother: p32,
};

hello3(p31);
hello3(p32);
hello3(p33);