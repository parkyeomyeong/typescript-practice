console.log(Symbol('foo') === Symbol('foo'));

const sym = Symbol();

// 이건 봐도모르겠네 뭐냐 .. 나중에 찾아보자
const obj ={
    [sym]:"value",
};

obj[sym]