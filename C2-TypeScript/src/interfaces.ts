// interfaces (types x interface)

// ultilizado par tipar objetos
type robot = {
  readonly id: number | string;
  name: string;
};

// mais ultilizado quando for trabalhar com classe
interface robot2 {
  readonly id: number | string;
  name: string;
}

const bot1: robot = {
  id: "1",
  name: "megaman",
};

const bot2: robot2 = {
  id: "1",
  name: "megaman",
};

class Pessoa implements robot2 {
  id: string | number;
  name: string;

  constructor(id: string | number, name: string) {
    this.id = id;
    this.name = name;
  }

  sayHello(): string {
    return `hello i'm ${this.name}`;
  }
}

const p = new Pessoa(1, "gutsman");
console.log(p.sayHello());
