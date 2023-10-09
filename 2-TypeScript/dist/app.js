"use strict";
var Foods;
(function (Foods) {
    Foods["Osh"] = "Osh";
    Foods["Mastava"] = "Mastava";
    Foods["Manti"] = "Manti";
    Foods["Shorva"] = "Shorva";
    Foods["Lagmon"] = "Lagmon";
})(Foods || (Foods = {}));
class Food {
    name;
    ingredients;
    constructor(name, ingredients) {
        this.name = name;
        this.ingredients = ingredients;
    }
}
const findEat = (ingredients) => {
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
};
console.log(findEat(["go'sht", "sabzi", "guruch", "yog'", "suv", "loviya", "piyoz"]));
