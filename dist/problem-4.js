"use strict";
//problem 4: Define a union type Circle and Rectangle, where each type has a unique shape property. Create a function calculateShapeArea that uses type guards to calculate the area based on the shape type.
const calculateShapeArea = (properties) => {
    if ("radius" in properties) {
        const circleArea = Math.PI * properties.radius * properties.radius;
        return Math.round(circleArea * 100) / 100;
    }
    else {
        return properties.height * properties.width;
    }
};
console.log(calculateShapeArea({ shape: "circle", radius: 3 }));
console.log(calculateShapeArea({ shape: "rectangle", height: 3, width: 5 }));
