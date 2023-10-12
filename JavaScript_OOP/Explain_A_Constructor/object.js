// In object-oriented programming, a class is a blueprint for creating objects 
// (a particular data structure), providing initial values for state (member variables or attributes), 
// and implementations of behavior (member functions or methods).
class User {

    // In class-based, object-oriented programming, a constructor (abbreviation: ctor) 
    //is a special type of function called to create an object. 
    // It prepares the new object for use, often accepting arguments 
    // that the constructor uses to set required member variables.
    constructor(email, password) {

        // The this keyword refers to the current object in a method or constructor. 
        // The most common use of the this keyword is to eliminate the confusion between 
        // class attributes and parameters with the same name 
        // (because a class attribute is shadowed by a method or constructor parameter).
        this.email = email;
        this.password = password;
    }
}

// the 'new' keyword
// 1. Creates a new empty object {}
// 2. Sets the value of 'this' to be the new empty object
// 3. Calls the constructor method
// 4. Attach email and password properties to the empty object
// 5. Set the properties = to the arguments passed in.
// 6. Return the new object
var userOne = new User('test@gmail.com', 'test123');
var userTwo = new User('test2@gmail.com', 'test1234');

console.log(userOne);
console.log(userTwo);