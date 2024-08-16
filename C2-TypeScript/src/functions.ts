// funções

function addNumber(x: number, y: number): number {
  return x + y;
}

function addToHello(name: string): string {
  return `Hello ${name}`;
}

// função multi tipos

function CallToPhone(phone: number | string): number | string {
  return phone;
}

// funções async

async function getDatabase(id: number): Promise<number | string> {
  return "felipe";
}

let soma: number = addNumber(4, 7);

console.log(addToHello("Felipe"));
console.log(soma);
