//problem 4: Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.

type Circle = {
  shape: "circle";
  radius: number;
};

type Rectangle = {
  shape: "rectangle";
  width: number;
  height: number;
};

const calculateShapeArea = (properties: Circle | Rectangle): number => {
  if ("radius" in properties) {
    const circleArea = Math.PI * properties.radius * properties.radius;
    return Math.round(circleArea * 100) / 100;
  } else {
    return properties.height * properties.width;
  }
};

console.log(calculateShapeArea({ shape: "circle", radius: 3 }));
console.log(calculateShapeArea({ shape: "rectangle", height: 3, width: 5 }));
