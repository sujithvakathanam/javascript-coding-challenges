class Calculator {
    // Write functions to add(), subtract(), multiply() and divide()

    constructor (num1, num2){
        this.num1 = num1;
        this.num2 = num2;
    }

    add() {
        console.log(this.num1);
        return this.num1 + this.num2;
    }

    subtract() {
        return this.num1 - this.num2;
    }

    multiply(){
        return this.num1 * this.num2;
    }

    divide(){
        return this.num1 / this.num2;
    }

}
let calc = new Calculator(4, 8);
console.log(calc.add());
console.log(calc.subtract());
console.log(calc.multiply());
console.log(calc.divide());