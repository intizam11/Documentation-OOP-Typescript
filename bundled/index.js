"use strict";
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    sayHello() {
        console.log(`hello nama saya ${this.name} umur saya ${this.age}`);
    }
}
const intizam = new Person("intizam", 12);
intizam.sayHello();
