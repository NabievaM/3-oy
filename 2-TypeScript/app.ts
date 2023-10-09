enum Foods {
    Osh = "Osh",
    Mastava = "Mastava",
    Manti = "Manti",
    Shorva = "Shorva",
    Lagmon = "Lagmon",
}

class Food {
    name: string;
    ingredients: string[];
    constructor(name: string, ingredients: Array<string>) {
        this.name = name;
        this.ingredients = ingredients;
    }
}
const findEat = (ingredients: Array<string>): string | undefined => {
    const osh = new Food(Foods.Osh, [
        "go'sht", "sabzi", "guruch", "yog'", "suv", "piyoz",
    ]);

    const mastava = new Food(Foods.Mastava, [
        "go'sht", "sabzi", "guruch", "yog'", "suv", "loviya", "piyoz",
    ]);

    const shorva = new Food(Foods.Shorva, ["go'sht", "suv", "kartoshka", "sabzi", "piyoz",]);

    const manti = new Food(Foods.Manti, ["go'sht", "un", "suv", "piyoz"]);
    const lagmon = new Food(Foods.Lagmon, [
        "go'sht", "un", "suv", "piyoz", "sabzi",
    ]);

    const foods = [manti, osh, shorva, lagmon, mastava];
    let count = 0;
    let food;

    foods.forEach((f) => {
        let max = 0;
        f.ingredients.forEach((i, index) => {
            ingredients.forEach((ingredients) => {
                if (i === ingredients) {
                    max += 1;
                }
            });

            if (max > count) {
                count = max;
                food = f.name;
            }
        });
        max = 0;
    });
    return food;
}

console.log(findEat(["go'sht", "sabzi", "guruch", "yog'", "suv", "loviya", "piyoz"]));


//------------------------------------------

// //private public protected
// class Person {
//     protected name: string;
//     private age: number;
//     public gender: string;

//     constructor(name: string, age: number, gender: string) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }

//     sayHi(date: Date): string {
//         return `Hi from ${this.name} at ${date.getDay()}`;
//     }
// };
// class Child extends Person {
//     phone: string;
//     constructor(phone: string, age: number, name: string, gender: string) {
//         super(name, age, gender);
//         this.phone = phone;
//     }
//     sayName() {
//         console.log(this.name);

//     }
// }

// const child: Child = new Child("+111", 30, "Alex", "Male");
// child.sayName();

// ----------------------------

// class Person {
//     name!: string;
//     age!: number;
//     gender!: string;

//     constructor(name: string, age: number, gender: string) {
//         this.name = name;
//         this.age = age;
//         this.gender = gender;
//     }

//     sayHi(date: Date): string {
//         return `Hi from ${this.name} at ${date.getDay()}`;
//     }
// }
// const person: Person = new Person("Alex", 30, "London");
// console.log(person.sayHi(new Date()));



//function
// function addTwo(a: number, b: number): number { }; - batta number qaytsin deb berganmiz;
// function addTwo(a: number, b: number): void { }; -void xech narsa qaytmedi dgani.
// async function addTwo(a: number, b: number): Promise<void> { }; - async function boganda void ni promise urab qoyishimiz shart.

// black, white, grey
// type IColor = 'black' | 'white' | 'grey';
// interface Iiphone15 {
//     color: IColor;
//     memory?: number;
// }

// const iPhone15: Iiphone15 = {
//     color: "black",
//     memory: 258
// }


// interface IUser {
//     name: string;
//     age: number;
//     gender: string;
// }
// interface IWorker extends IUser {
//     work: string;
//     salary: number;
// }
// const obj: IWorker = {
//     name: "Mukhlis",
//     age: 16,
//     gender: "Female",
//     work: "No work",
//     salary: 0
// }

// interface IResponce {
//     id: number;
//     Code: string;
//     Ccy: string;
//     CcyNm_RU: string;
//     CcyNm_UZ: string;
//     CcyNm_UZC: string;
//     CcyNm_EN: string;
//     Nominal: string;
//     Rate: string;
//     Diff: string;
//     Date: string;
// }

// const sum = async (quantity: number): Promise<number> => {
//     const [data]: [IResponce] = await (
//         await fetch("https://cbu.uz/uz/arkhiv-kursov-valyut/json/USD/")
//     ).json();

//     console.log(Number(data.Rate) * quantity);

//     return Number(data.Rate) * quantity;
// };

// sum(20);


//enumda agar uzgaruvchilarga qiymat bermase indexlab 0,1,2,3 .. dalshe ob ketadi .Agar bittasiga North  = 10; berib qoysam qolganlarini 12,13 qilib indexlab ketadi.
// enum UFq {
//     North = "North",
//     West = "West",
//     East = "East",
//     South = "South",
// }

// const person = {
//     from: UFq.East
// };

// const person1 = {
//     from: UFq.East
// };

// const person2 = {
//     from: UFq.East
// };

// const person3 = {
//     from: UFq.East
// };

// console.log(person);
// console.log(person1);
// console.log(person2);
// console.log(person3);