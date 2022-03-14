interface Person8{
    name: string;
    age?: number;
    readonly gender : string;
}

const p81: Person8 = {
    name: "Park",
    gender: "male"
}

// 이거 안됨. 왜냐면 readonly 속성이라 -> 바꿀수 없는건가봐
// p81.gender = "female";