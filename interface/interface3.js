"use strict";
function hello3(person) {
    console.log(`Hi ${person.name}`);
}
const p31 = {
    name: "Park",
    age: 25
};
const p32 = {
    name: "Kim",
    // 임의의 key값 설정 가능
    systers: ["sung", "chan"],
};
const p33 = {
    name: "Ahn",
    // 임의의 key값 설정 가능
    fater: p31,
    mother: p32,
};
hello3(p31);
hello3(p32);
hello3(p33);
