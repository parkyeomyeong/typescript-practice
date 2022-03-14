function HelloBasic<T, U>(message : T, comment : U): T{
    return message;
}

// 두가지 방법
HelloBasic<string, number>("park", 39);
//이건 웃긴게 이렇게 36 37 넣으면 타입이 36 37 이 됨
HelloBasic(36, 37);