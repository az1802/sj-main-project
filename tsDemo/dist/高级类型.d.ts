interface Bird {
    name: string;
}
interface Fish {
    age: string;
}
interface Fish {
    age_b: string;
}
declare let t1: Bird | Fish;
declare function broken(name: string | null): string;
declare type CustomResponse = {
    data: {
        errcode: number;
    };
};
declare type CustomData = CustomResponse["data"];
