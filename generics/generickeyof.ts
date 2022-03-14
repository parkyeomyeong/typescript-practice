interface IPerson{
    name : string;
    age : number;
}

const person1: IPerson = {
    name :"Park",
    age: 25,
};
// keyof IPerson => "name" | "age"인 union임

//인자로 name, age에따라 알아서 맞게 value를 추출하는 함수를 만들고자한다면 아래와같이ㄱ
function getProp<T, K extends keyof T>(obj:T, key: K):T[K]{
    return obj[key];
}

getProp(person1, 'name')
getProp(person1, 'age')

function setProp<T, K extends keyof T>(obj:T, key: K, value: T[K]):void{
    obj[key] = value;
}

console.log(person1);
setProp(person1, 'name', 'yeomyeong');
setProp(person1, 'age', 26);
console.log(person1);