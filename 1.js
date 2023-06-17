class Area {
    constructor(x, y, shape) {
      this.shape = shape;
      this.width = x;
      this.height = y;
    }
    getArea() {
      return this.height * this.width;
    }
    getAreaInfo() {
      return `The area of ${this.shape} is equal to ${this.getArea()}`;
    }
  }
  
  class Square extends Area {
    constructor(x, y) {
      super(x, y, 'square');
    }
    getAreaInfo() {
      return `The perimeter of ${this.shape} is equal to ${4 * this.width}`;
    }
  }
  
  class Rectangular extends Area {
    constructor(x, y) {
      super(x, y, 'rectangular');
    }
    getAreaInfo() {
      return `The perimeter of ${this.shape} is equal to ${(this.height + this.width) * 2}`;
    }
  }
  
  class Circle extends Area {
    constructor(x) {
      super(x, x, 'circle');
    }
    getArea() {
      return Math.PI * Math.pow(this.width, 2);
    }
    getAreaInfo() {
      return `The circumference of ${this.shape} is equal to ${2 * Math.PI * this.width}`;
    }
  }
  
  class Triangle extends Area {
    constructor(x, y) {
      super(x, y, 'triangle');
    }
    getArea() {
      return (this.width * this.height) / 2;
    }
    getAreaInfo() {
      return `The perimeter of ${this.shape} is equal to ${this.width + this.height + Math.sqrt(Math.pow(this.width, 2) + Math.pow(this.height, 2))}`;
    }
  }
  
  class Cube extends Area {
    constructor(x) {
      super(x, x, 'cube');
    }
    getVolume() {
      return Math.pow(this.width, 3);
    }
  }
  
  let sq1 = new Square(5, 5);
  console.log(sq1.getArea());
  console.log(sq1.getAreaInfo());
  
  let req1 = new Rectangular(5, 10);
  console.log(req1.getArea());
  console.log(req1.getAreaInfo());
  
  let circle = new Circle(3);
  console.log(circle.getArea());
  console.log(circle.getAreaInfo());
  
  let triangle = new Triangle(4, 6);
  console.log(triangle.getArea());
  console.log(triangle.getAreaInfo());
  
  let cube = new Cube(3);
  console.log(cube.getArea());
  console.log(cube.getAreaInfo());
  console.log(cube.getVolume());
  