"use strict";
// problem 8: Create a function validateKeys(obj: T, keys: (keyof T)[]) that takes an object obj and an array of keys keys. The function should return true if all of the specified keys exist in the object; otherwise, it should return false.
const validateKeys = (obj, keys) => {
    keys.forEach((key) => {
        if (!(key in obj)) {
            return false;
        }
    });
    return true;
};
const user = {
    name: "Ranok",
    age: 24,
    email: "ranok@example.com",
};
console.log(validateKeys(user, ["name", "age"]));
