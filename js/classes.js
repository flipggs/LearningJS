class Dessert {
    constructor (calories = 250){
        this.calories = calories;
    }
}

class IceCream extends Dessert{
    constructor (flavor, calories, toppings = []){
        super(calories);
        this.flavor = flavor;
        this.toppings = toppings;

    }

    addToppings(topping){
        this.toppings.push(topping);
    }

    static staticMethod() {
        console.log('staticMethod')
      }
}