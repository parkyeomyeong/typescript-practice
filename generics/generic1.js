"use strict";
function helloString(message) {
    return message;
}
function helloNumber(message) {
    return message;
}
function hello(message) {
    return message;
}
console.log(hello("Mark").length);
//이건 undefined가 나옴
console.log(hello(39).length);
function helloGeneric(message) {
    return message;
}
// 인자 넣자마자 그 타입이 추론되서 사용됨
console.log(helloGeneric('Park').length);
console.log(helloGeneric(34));
console.log(helloGeneric(true));
