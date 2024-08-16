"use strict";
const bot1 = {
    id: "1",
    name: "megaman",
};
const bot2 = {
    id: "1",
    name: "megaman",
};
class Pessoa {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    sayHello() {
        return `hello i'm ${this.name}`;
    }
}
const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
