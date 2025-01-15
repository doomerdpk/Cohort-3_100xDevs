// Inheritance in JavaScript classes allows one class to inherit properties and methods from another class

//Create a circle class that has 2 properties(radius, color) and 2 methods(area, paint)

// class Circle {
//   constructor(radius, color) {
//     this.color = color;
//     this.radius = radius;
//   }

//   area() {
//     return Math.PI * this.radius * this.radius;
//   }

//   paint() {
//     console.log("Color of this circle is: " + this.color);
//   }
// }

// const circle1 = new Circle(4, "red");
// console.log(circle1.radius);
// console.log(circle1.color);
// console.log(circle1.area());
// circle1.paint();

//Inheritance allows combining the common properties of two or more child classess into a single parent class.
//those properties can be inherited/used by all the child classes

//parent Class
class Shape {
  constructor(color) {
    this.color = color;
  }

  getColor() {
    console.log("Color for this shape is: " + this.color);
  }
}

class Circle extends Shape {
  constructor(radius, color) {
    super(color); //Inherited the color property from Parent Class
    this.radius = radius;
  }

  area() {
    return Math.PI * this.radius * this.radius;
  }

  paint() {
    console.log("Color of this circle is: " + this.color);
  }
}

class Rectangle extends Shape {
  constructor(height, width, color) {
    super(color); //Inherited the color property from Parent Class
    this.height = height;
    this.width = width;
  }

  area() {
    return this.width * this.height;
  }

  paint() {
    console.log("Color of this rectangle is: " + this.color);
  }
}

const shape1 = new Shape("Blue");
console.log(shape1.color);
shape1.getColor();

const circle2 = new Circle(4, "red");
console.log(circle2.radius);
console.log(circle2.color);
console.log(circle2.area());
circle2.paint();

const rectange1 = new Rectangle(2, 4, "red");
console.log(rectange1.color);
console.log(rectange1.height);
console.log(rectange1.width);
console.log(rectange1.area());
rectange1.paint();
