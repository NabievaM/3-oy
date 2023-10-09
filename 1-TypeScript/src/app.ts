// const arr: Array<{ age: string }> = [
//     { age: "22" }, { age: "78" }
// ];

//Arraydi methodlari
// arr.forEach((el) => {
//     console.log(el.age);
// });

//Interface - object uchun type yasash deb tushunse boladi.Interface class bilan bir xil yoziladi chunki classdan yasalgan.
// interface Person {
//     age: number;
//     name: string;
//     family: {
//         address: string,
//         count: number
//     };
// };

// interface Family {
//     address: string,
//     count: number
// }

// interface Person {
//     age: number;
//     name: string;
//     family: Family;
// };

// const obj: Person = {
//     age: 15,
//     name: "Mukhlis",
//     family: {
//         address: "Uzbekistan",
//         count: 6,
//     }
// };
// console.log(obj);


//Type ichiga xoxlagan type ni berishimiz mumkun , type type yaratadi. Type ni type larni birlashtirish uchun ishlatiladi kopincha.
type mix = string | number | number[] | boolean | any[];
let a: mix = 10 * 10;
let c: mix = [10, "Mukhlis"];
let b: mix = true;
let d: mix = "Hello";

type age = { age: number };
let e: age = { age: 10 };
console.log(a);


//project
interface Person {
    age: number;
    username: string;
    family?: Person[];
}

const person: Person = {
    age: 34,
    username: "Mukhlis",
    family: [
        {
            age: 68,
            username: "Muslima",
            family: [
                {
                    age: 56,
                    username: "Munisa",
                },
            ],
        },
        {
            age: 78,
            username: "Xadicha",
            family: [
                {
                    age: 78,
                    username: "Xadi999",
                },
            ],
        },
    ],
};
console.log(person);
