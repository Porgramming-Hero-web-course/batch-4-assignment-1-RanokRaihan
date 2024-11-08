## What is type guard in typescript?

Type guard is a system in typescript that is used to guard the types. that means type guard narrow down the incomming types. it will be more clear when we will see the example and use case scenario.

## Why we need type guard?

We know typescript is a statically typed languag. But sometime we need to determine the types during the runtime. For that if we do not become carefull that can lead us to bug. specially when we are working with ` union , any or unknown` types we need to determine the type after declaration. in these cases type guard provieds us type safety.

## How do we implement type guard

there are various ways to introduce type guard according to our use cases. Let's discuss some of them.

### using ` typeof`

suppose we need a function named `productDetails` that takes one parameter. It can a `string` or a `number`. if it is a `number` then we will assume it is product price . if it is a `string` then we will assume it is the product name. Let's see how we can achive that using type guard.

```tsx
const productDetails = (param: string | number): string => {
  if (typeof param === "number") {
    return `Price of the product is  $${param.toFixed(2)}`;
  } else {
    return `Name of the product is ${param}.`;
  }
};

console.log(productDetails(179.99)); //Price of the product is  $179.99
console.log(productDetails("airpod pro 2")); //Name of the product is airpod pro 2.
```

We can see useing `typeof` we can create a typeguard that allows us to output deferente things.

### useing `in`

Suppose we have a function named `getUser` that takes a user object as parameter and returns a string saying if the user is admin or a regular user. so how do we do that. we can check if there is a key named `role` in the object . if the role is available the it is a admin. otherwise it's a regular user. we can do that useing `in`.Let's see the code.

```tsx
type RegularUser = {
  name: string;
  email: string;
};
type AdminUser = {
  name: string;
  email: string;
  role: "admin";
};

const getUser = (user: RegularUser | AdminUser): string => {
  if ("role" in user) {
    return `${user.name} is respected admin!`;
  } else {
    return `${user.name} is a regular user!`;
  }
};

const regularUser: RegularUser = {
  name: "Ranok Raihan",
  email: "ranok@example.com",
};

const adminUser: AdminUser = {
  name: "Doland Trump",
  email: "trump@admin.com",
  role: "admin",
};

console.log(getUser(regularUser)); //Ranok Raihan is a regular user!
console.log(getUser(adminUser)); //Doland Trump is respected admin!
```

we can also implement typeguard useing `instanceof`.That check if a object is a instance of a `class` . Also type guard can be implimented by validating complex `interfaces` and `types`.

that all for today.
