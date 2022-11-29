class Car{
    constructor(brand ,color){
        this.brand = brand; // key = value
        this.color = color; 
    }
    printcolor(){
    return this.color;
}
}
var test = new Car("Audi", "black");
console.log(`the color of my car is ${test.printcolor()}`);
