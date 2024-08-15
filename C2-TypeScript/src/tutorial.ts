// tipos primitivos: boolean, number, string

let ligado: boolean = false;
let nome: string = "felipe";
let idade: number = 30;
let altura: number = 1.9;

// null
// undefined

// tipos especiais null, undefined

let nulo: null = null;
let indefinido: undefined = undefined;

// tipos abrangentes: any, void
function executaQuery(): void {}
let retorno: void;
let retornoView: any = false;

// objeto = sem previsibilidade

let produto: object = {
  name: "felipe",
  cidade: "sp",
  idade: 30,
};

type ProdutoLoja = {
  nome: string;
  preco: number;
  unidades: number;
};

// objeto tipado - com previsibilidade

let meuProduto: ProdutoLoja = {
  nome: "Tenis",
  preco: 89.99,
  unidades: 5,
};

/**
 * arrays
 */

let dados: string[] = ["felipe", "ana", "adriana"]; // forma 1
let dados2: Array<string> = ["felipe", "ana", "adriana"]; // forma 2

let infos: (string | number)[] = ["felipe", 2];

/**
 * Tuplas
 */

let boleto: [string, number, number] = ["agua conta", 199.9, 265263];

/**
 * arrays métodos
 */
let data: (string | number)[] = ["david", 9000];

data.pop();

/**
 * Datas
 */

let aniversario: Date = new Date("2022-12-01 05:00");
console.log(aniversario.toString());
