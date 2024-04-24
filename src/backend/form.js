"use strict";

export const User = function (fullName, email, password) {
  this.fullName = fullName;
  this.email = email;
  this.password = password;
};

const userOne = new User("Toluwalase", "toluwalase@gmail.com", "password");
const userTwo = new User("John", "john@gmail.com", "passwordtwo");
console.log(userOne); // User { fullName: 'Toluwalase', email: 'toluwalase@gmail.com', password: 'password' }
console.log(userTwo); // User { fullName: 'John', email: 'john@gmail.com', password: 'passwordtwo' }
