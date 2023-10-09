//1
class Person {
    name: string;
    age: number;
    gender: string;
    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
const about: Person = new Person("Mukhlis", 16, "Female");
console.log(about);
//2
class Student extends Person {
    grade: number;
    constructor(grade: number, age: number, name: string, gender: string) {
        super(name, age, gender);
        this.grade = grade;
    }
}
const student: Student = new Student(5, 16, "John", "Male");
console.log(student);
//3
class Book {
    author: string;
    title: string;
    publicyear: number;
    constructor(author: string, title: string, publicyear: number) {
        this.author = author;
        this.title = title;
        this.publicyear = publicyear;
    }
    // time(date: Date): string {
    //     return `${date.getFullYear()} - ${this.publicyear}`;
    // }
}
const year: Book = new Book("Abdulla Qodiriy", "Скорпио́н из алтаря́", 1929);
console.log(year);
//4
class Rectangle {
    width: number;
    height: number;
    result: number;
    constructor(width: number, height: number, result: number) {
        this.width = width;
        this.height = height;
        this.result = result;
    }
}
const rectangle: Rectangle = new Rectangle(2, 3, 2 * 3);
console.log(rectangle);
