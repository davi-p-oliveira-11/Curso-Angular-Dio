// classes

/* 
  data modifiers
  public : todos veem
  private : privado somente a classe vê
  protected : classe e subclasses conseguem enxergar

  readonly : tambem impede que algum atributo seja modificado
*/

class Character {
  protected name?: string;
  str: number;
  skill: number;

  constructor(name: string, str: number, skill: number) {
    this.name = name;
    this.str = str;
    this.skill = skill;
  }

  attack(): void {
    console.log(`Attack with ${this.str} points`);
  }
}

// Character = superclass
// Magician = subclass
class Magician extends Character {
  magicPoints: number;
  constructor(name: string, str: number, skill: number, magicPoints: number) {
    super(name, str, skill);
    this.magicPoints = magicPoints;
  }
}

const p1 = new Character("Ken", 10, 98);
const p2 = new Magician("Mago", 9, 30, 100);
p1.attack();
