//Any
let myVar: any = 5;
myVar = "sds";
myVar = true;

let myVar2 = myVar as number;
let myVar3 = <number>myVar;

// myVar2 = 7;
console.log(myVar2);
console.log(myVar3);
console.log(typeof myVar2);
console.log(typeof myVar3);

//Tuple
const host: [string, number] = ["localhost", 3000];
console.log(host);

const address: [string, number, ...boolean[]] = [
    "Toshkent", 12, true, true, false
];

function getUser(user: string | string[]): string[] | string {
    if (Array.isArray(user)) {
        console.log(user.join(", "));
        return user;
    } else {
        console.log(user);
        return user;
    }
};

getUser(["admin", "user", "superadmin"]);
getUser("TypeScript");
//getUser(123)


//never
function myError(message: string): never {
    throw new Error(message);
}

function cheksiz(): never {
    while (true) {
        console.log("salom");
    }
}

type Animal = {
    name: string;
    age?: number;
};

type Cat = Animal & { //interface extends o'xshash
    color: string;
    tail?: boolean;
};

// const rect1: IRect = {
//     lineWidth: 2,
//     size: {
//         width: 30,
//         heigth: 20,
//     }
// }
// rect1.color = "blue";
// // read1.lineWidth = 5 //xato
// rect1.size.width = 50;

interface IStyle {
    border: string;
    borderRadius: "5px";
    [key: string]: string | number;
}
const css: IStyle = {
    border: "3px solid red",
    borderRadius: "5px",
    backGround: "Red",
    color: "Yellow",
    lineWidth: 2
};


interface IPosition {
    x: number;
    y: number;
}
// function position(): IPosition;
// function position(a: number): IPosition;
// function position(a: number, b: number): IPosition;
// function position(a?: number, b?: number): IPosition {
//     if (!a && !b) {
//         console.log("salom");
//     }if (a && !b) {
//         console.log(a);
//         return { x: a, y: undefined };
//     }
//     return { x: a, y: b }
// }
// function mergeObj<T extends object>(obj1: T, obj2: K) {
//     return Object.assign({}, obj1, obj2);
// }

// const mergeObj1 = mergeObj({ user: "admin" }, { password: "qwerty" });
// const mergeObj2 = mergeObj({ type: "rectangle" }, { area: 100 });
// const mergeObj3 = mergeObj({ model: "BMW" }, { speed: 280 });