"use strict";
function hello2(person) {
    console.log(`Hi! ${person.name}!`);
}
hello2({ name: "park", age: 25 });
hello2({ name: "park" });
