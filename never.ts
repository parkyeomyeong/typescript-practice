// never는 말 그대로 아무것도 리턴할 게 없는거임
function error(message : string): never{
    throw new Error(message);
}

function fail(){
    return error('failed')
}

let aa: string = 'hello';

declare const c :string | number;

if(typeof aa !== 'string'){
    aa;
}