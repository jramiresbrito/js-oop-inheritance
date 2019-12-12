 // Implementing extension
function extend(Child, Parent) {
  Child.prototype = Object.create(Parent.prototype); // Point to correct prototype
  Child.prototype.constructor = Child; // and reset its constructor
}

// The Shape definition
function Shape() {
}

Shape.prototype.duplicate = () => console.log('duplicate shapes');

// The Circle definition
function Circle(){
}

// Inheriting from shape.
extend(Circle, Shape);

// Override duplicate method to circles
Circle.prototype.duplicate = () => {
  Shape.prototype.duplicate.call(this); // Calling also the shape implementation.
  console.log('duplicate circles'); // This is circle implementation.
}

// The Triangle definition
function Triangle(){
}

// Inheriting from shape.
extend(Triangle, Shape);

// Override duplicate method to triangles
Triangle.prototype.duplicate = () => {
  console.log('duplicate triangles'); // The triangle implementation
}

// Instantiating the three object types.
const s = new Shape();
const c = new Circle();
const t = new Triangle();
