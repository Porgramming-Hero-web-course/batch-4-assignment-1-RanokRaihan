"use strict";
// problem 6: Define an interface Profile with properties name, age, and email. Create a function updateProfile that accepts an object of type Profile and an object of type Partial representing the updates. The function should return the updated profile.
const updateProfile = (profile, updates) => {
    return Object.assign(Object.assign({}, profile), updates);
};
const studentProfile = {
    name: "Ranok Raihan",
    age: 25,
    email: "ranokraihan@gmail.com",
};
console.log(updateProfile(studentProfile, { age: 24 }));
