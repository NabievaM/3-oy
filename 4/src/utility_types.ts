//Readonly
interface IUser {
    name: string;
    pass?: string;
}
const user: Readonly<IUser> = {
    name: "Mukhlis",
    pass: "qwerty",
};

// user.name = "SuperUser"; //Xato
// user.pass = "12345"; //Xato Cannot assign to 'pass' because it is a read only property;

//Required
// interface IRect {
//     width?: number;
//     height?: number;
// }
// const rect1: IRect = { width: 10 }; -ok
// const rect2: Required<IRect> = { width: 10 }; -error

//Partial
interface IRect {
    width: number;
    height: number;
}
// const rect1: IRect = { width: 10 };  //error
const rect2: Partial<IRect> = { width: 10 }; //ok

//Record<K, T>
// type Record<K extends string, T> = {
//     [P in K]: T;
// };

// type WwwConfig = Record<IRect"port" | "domailn" | "root" | "is-active",
//     string | number | boolean 
//>;
type WwwConfig = Partial<
    Record<"port" | "domain" | "root" | "is_active", string | number | boolean>
>;
let WwwConfig: WwwConfig = {
    domain: "http://domain.com",
    port: 59,
    root: "root"
}
//-------------
type User = {
    _id: number;
    name: string;
    email: string;
    password: string;
    createdAt: Date;
};
type UserNoMetal = Exclude<keyof User, "_id" | "createdAt">;
type UserNoMetal2 = Extract<keyof User, "name" | "email" | "password" | "isActive">;

type UserNoMetal3 = Omit<User, "_id" | "createdAt">;
type UserNoMetal4 = Pick<User, "name" | "email" | "password">;

//NonNullable
type Type1 = NonNullable<string | null | number | undefined>;


//Parameters
function func<T>(p0: T, p1: number, p2: string, p3: boolean, p4: object = {}) { }
type FunctionParams = Parameters<typeof func>;

//ConstructorParameters<T>
class MyClass<T> {
    constructor(p0: T, p1: number, p2: string, p3: boolean, p4: object = {}) { }
}

//Awaited<T>
//A = string
type A = Awaited<Promise<string>>;
type A1 = Awaited<string>;

//B = string
type B = Awaited<Promise<Promise<string>>>;

//C = string | number | null | undefined
type C = Awaited<string | Promise<number> | null | undefined | string>;
