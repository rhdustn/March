export interface Result<R>{
    isError : false
    value : R;
}
export interface Failure<E>{
    isError : true
    value : E;
}

export type Failable<R,E> = Result<R> | Failure<E>

