class Car{
    constructor(brand ,color){
        this.brand = brand; // key = value
        this.color = color; 
    }
}
var test = new Car("Audi", "black");
console.log(test.brand);
console.log(test.color);