const SECRET: string = "123321";
const PI: number = 3.14;
const getPass = (name: string, age: number): string => `${name}${age}`;
const isEmpty = <T>(data: T): boolean => !data;

//ES5 Module
(function () {
    const SECRET: string = "123321";
    const PI: number = 3.14;
    const getPass = (name: string, age: number): string => `${name}${age}`;
    const isEmpty = <T>(data: T): boolean => !data;
})();

//Define namespace
namespace Utils {
    export const SECRET: string = "123321";
    const PI: number = 3.14;
    export const getPass = (name: string, age: number): string => `${name}${age}`;
    export const isEmpty = <T>(data: T): boolean => !data;
}

//Export data from NameSpace
namespace Utils {
    const SECRET: string = "123321";
    const PI: number = 3.14;
    const getPass = (name: string, age: number): string => `${name}${age}`;
    const isEmpty = <T>(data: T): boolean => !data;
}

const myPass = Utils.getPass("Ali", 2); //"Ali2"
const isSecret = Utils.isEmpty(Utils.SECRET); //false

namespace Aylana {
    const PI: number = 3.14;
    export const getArea = (r: number): number => PI * r * r;
}
const aylana1 = Aylana.getArea(5);
