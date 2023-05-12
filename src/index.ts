class Person {
    public name: string;
    public age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }

    sayHello() {
        console.log(
            `hello nama saya ${this.name} umur saya ${this.age}`
        );
    }

}

const intizam = new Person("intizam", 12)
intizam.sayHello()










