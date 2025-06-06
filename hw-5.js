function getRectangleArea() {
    console.log(this.width * this.height);
}
function getRectanglePerimeter() {
    console.log(this.width + this.height);
}

const square1 = {
    width: 40,
    height: 30,
    getRectangleArea: getRectangleArea,
    getRectanglePerimeter: getRectanglePerimeter,
}
const square2 = {
    width: 60,
    height: 30,
    getRectangleArea: getRectangleArea,
    getRectanglePerimeter: getRectanglePerimeter,
}

square1.getRectangleArea();
square1.getRectanglePerimeter();
square2.getRectangleArea();
square2.getRectanglePerimeter();