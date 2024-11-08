// problem-5: Write a generic function getProperty that takes an object and a property name as arguments and returns the property value. Add a constraint to ensure the property name exists on the object.

const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
  return obj[key];
};

const laptop = {
  model: "macbook m1 pro",
  ram: 16,
  storage: "512 GB",
  display: 14,
};

console.log(getProperty(laptop, "model"));
