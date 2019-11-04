class Product {
    constructor(ingredient, calories){
        this.ingredient = ingredient;
        this.calories = calories;
    }
}
class  Dish {
    constructor(dish){
        this.products = [];
        this.dish = dish;

    }
    addProduct(ingredientName, ingredientGram){
        this.products.push({ingredientName, ingredientGram});
    }
    getCalories(){
        let totalCalories = 0;
        for(let i = 0; i < this.products.length; i++){
            let toTakeDish = (this.products[i].ingredientGram * this.products[i].ingredientName.calories) / 100;
            totalCalories += toTakeDish;
        }
        return totalCalories;
    }
}

class  CaloriesCalculator {
    constructor() {
        this.dishes = [];
        // let quantityDish = this.dishes.length + 1
    }
    addDish(dish){
        this.dishes.push(dish);
    }
    getTotalCalories(){
        let calories = 0;
        this.dishes.forEach(dish => {
            calories += dish.getCalories();
        });
        return calories;
    }
    getAllDishesInfo(){
        let a = [];

        for(let i = 0; i < plov.products.length; i++){
            let aa = plov.products[i].ingredientGram;
            let ss = plov.products[i].ingredientName.ingredient;
            let gg = plov.products[i].ingredientName.calories;
            a.push(ss + ', ' + aa + 'гр ' + gg + 'ккал\n');


        }
        console.log('============================================');
        const dishes = plov.dish + ' -' + this.dishes.length + ' порция, ' + calories + ' ккал' + '\n' + ',' + a;
        console.log(dishes);
        console.log('============================================');
    }
}

const meat = new Product('Филе говядина', 158);

const rice = new Product('Рис', 130);

const onion = new Product('Лук', 40);

const carrot = new Product('Морковь', 41);



const plov = new Dish('Плов');

plov.addProduct(meat, 100);

plov.addProduct(rice, 150);

plov.addProduct(onion, 25);

plov.addProduct(carrot, 25);



const calculator = new CaloriesCalculator();

calculator.addDish(plov);

const calories = calculator.getTotalCalories();

console.log(calories); // должно вывести 373.25



const totals = calculator.getAllDishesInfo();

console.log(totals);

