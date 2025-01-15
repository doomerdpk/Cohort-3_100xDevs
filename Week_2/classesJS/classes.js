// classes are a way to define blueprints for creating objects

//class keyword is used to define a class
class Rectangle {
  //constructor is a function that gets autometically called whenever a new object of class is created
  //this keyword refers to the current object. Using this keyword we are attaching the user sent parameters to the current object created.
  // i.e., we are initializing the object of the class using constructor
  // width, height and color are properties (variables) for the class.
  // area() and paint() are methods(functions) for the class.
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  area() {
    const area = this.width * this.height;
    return area;
  }

  paint() {
    console.log(`Painting with color ${this.color}`);
  }
}

//new keyword is used to create a new object/instance of the class. rect1 and rect2 are two ojects created for the Rectange class.
const rect1 = new Rectangle();
console.log(rect1.width);
console.log(rect1.height);
console.log(rect1.color);
console.log(rect1.area());
rect1.paint();

const rect2 = new Rectangle(2, 4, "Blue");

console.log(rect2.width);
console.log(rect2.height);
console.log(rect2.color);
console.log(rect2.area());
rect2.paint();
