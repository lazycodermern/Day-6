class Car{
    constructor(brand ,color){
        this.brand = brand; // key = value
        this.color = color; 
    }
    printcolor(str){
    return str+this.color;
}
}
var test = new Car("Audi", "black");
var result = test.printcolor("the color of my car is ")
console.log(result);
