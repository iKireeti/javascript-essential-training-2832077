/**
 * Practice: Building objects
 *
 * - Create JavaScript objects based on objects in your current environment.
 * - Give each object an identifiable name.
 * - Create properties to describe the objects and set their values.
 * - Find an object that has another object inside of it to create a nested object.
 * - Test your objects in the browser console by accessing the entire object and its specific properties.
 */

const car = {
  name: "mercedes",
  price: 40000,
  color: "blue",
  cc: 3000,
  torque: 0,
  maxSpeed: 0,
  calculateSpecs: function (cc) {
    if (cc > 2000) {
      this.torque = 500;
      this.maxSpeed = 150;
    }
  },
};

console.log(
  "running car for its calculate specs function with engine cc as 3000",
  car.calculateSpecs(3000)
);
console.log(
  "the new values for specs torque and max speed are:",
  car.torque + " : " + car.maxSpeed
);
