// Make a Circle with OOP
// Your task is to create a Circle constructor that creates a circle with a radius provided by an argument. The circles constructed must have two getters getArea() (PIr^2) and getPerimeter() (2PI*r) which give both respective areas and perimeter (circumference).
//
// For help with this class, I have provided you with a Rectangle constructor which you can use as a base example.
//
// Examples
// Let circy = new Circle(11);
// Circy.getArea();
//
// // Should return 380.132711084365
//
// Let circy = new Circle(4.44);
// Circy.getPerimeter();
//
// // Should return 27.897342763877365
// Notes
// eslint-disable-next-line max-len
// Don't worry about floating point precision - I've factored in the chance that your answer may be more or less accurate than mine. This is more of a tutorial than a challenge so the topic covered may be considered advanced, yet the challenge is more simple - so if this challenge gets labelled as easy, don't worry too much.

// eslint-disable-next-line no-unused-vars
class Rectangle {
  constructor (sideA, sideB) {
    this.sideA = sideA;
    this.sideB = sideB;
  }

  getArea () {
    return this.sideA * this.sideB;
  }

  getPerimeter () {
    return (this.sideA + this.sideB) * 2;
  }
}

class Circle {
  constructor (radius) {
    this.radius = radius;
    this.pi = 3.14159;
  }

  getArea () {
    return this.pi * this.radius * this.radius;
  }

  getPerimeter () {
    return 2 * this.pi * this.radius;
  }
}

// Unquote and use run to test these cases
const q = new Circle(11);
console.log(q.getArea());
console.log(q.getPerimeter());
