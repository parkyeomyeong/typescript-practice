class Students{
    // [index: string] : string;
    // 더정확하게는 이렇게 할 수 있지
    [index:string] : "male" | "female";
}

const a = new Students();
a.mark = "male";
a.jade = "male";

console.log(a);

const b = new Students();
b.chloe = "female";
b.alex = "male";
b.anna = "female";

console.log(b)