declare const maybe :unknown;

// 아래에서 any 였으면 통과가 됐을꺼임
// const aNumber : number = maybe;

if(maybe === true){
    const aBoolean :boolean = maybe;
}

if (typeof maybe ===  'string'){

    const aString : string = maybe;

}