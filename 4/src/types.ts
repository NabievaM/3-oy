//generic keyOf amalda
// const person = {
//     name: "Mukhlis",
//     age: "10",
// };
// const car = {
//     model: "Hundai",
//     marka: "Solaris",
//     color: "white",
// };
// console.log(getObjValue(person, "name"));
// console.log(getObjValue(person, "age"));
// console.log(getObjValue(car, "model"));
// console.log(getObjValue(car, "color"));

// function getObjValue<0 extends object, K extends keyof 0 > (obj: 0, key:K) {
//     return obj[key]
// };

// class NewStyleBags {
//     constructor(
//         readonly name: string,
//         public color: string,
//         private readonly material: string,
//         readonly price: number
//     ) {

//     }
//     info() {
//         return `${this.name}-${this.price}`;
//     }
// }

class Millat {
    constructor(
        public name: string,
        protected tili: string,
        private _dini: string,
        private _age: number
    ) { }
    set age(newAge: number) {
        this._age = newAge;
    }
    get age() {
        return this._age;
    }
    set dini(religious: string) {
        this._dini = religious;
    }
    get dini() {
        return this._dini;
    }

    about() {
        return `Millati ${this.name}, tili ${this.tili}`
    }

}
class Uzbek extends Millat {
    constructor(
        name: string,
        age: number,
        tili: string,
        dini: string,
        public history: string
    ) {
        super(name, tili, dini, age);
    }
    public setLang(lang: string) {
        this.tili = lang;
        //this._dini   //otasini private xususiyati yopiq
    }
    override about(): string {
        return `${super.about()},dini:${this.dini}, tarixi:${this.history}`;
    }
}

const uzbek1 = new Uzbek("Uzbek", 32, "uzbek", "Islom", "Buyuk");
uzbek1.setLang("Uzbek tili");
uzbek1.dini = "Islom dini";
uzbek1.age = 44;
console.log(uzbek1.age);

//Abstract
abstract class ShaxmatDona {
    abstract draw(): void;
    abstract move(): string;
    info(s: string) {
        console.log(s);
    }
}
// const dona = new ShaxmatDona() -xato
class Fil extends ShaxmatDona {
    draw(): void {
        console.log("Chiz");
    }
    move(): string {
        return "Diognal yur";
    }
}
const fil = new Fil();
fil.info("filcha");

//Implements
interface LoggerService {
    log: (mes: string) => void;
};
class Logger implements LoggerService {
    log(mes: string) {
        console.log(mes);
    }
}

//static
class StaticClass {
    static num = 1;
}
console.log(StaticClass.num); //instance yaratmasdan murojat qilish mumkin.
