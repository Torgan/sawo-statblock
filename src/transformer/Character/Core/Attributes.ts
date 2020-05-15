import { Trait } from "../Core/Trait";
import { Dice } from "../Tools/Dice";
import { Modifier } from "../Tools/Modifier";

export class Attributes {
  agility: Trait = new Trait(Dice.d4, new Modifier(0))
  smarts: Trait = new Trait(Dice.d4, new Modifier(0))
  spirit: Trait = new Trait(Dice.d4, new Modifier(0))
  strength: Trait = new Trait(Dice.d4, new Modifier(0))
  vigor: Trait = new Trait(Dice.d4, new Modifier(0))

  public statblock() : string {
    return 'Agi\tÂme\tFor\tInt\tVig\n' +
      this.agility.display + '\t' +
      this.spirit.display + '\t' +
      this.strength.display + '\t' +
      this.smarts.display + '\t' +
      this.vigor.display + '\n'
  } 

  static parse(value: string) : Attributes {
    let regexpAttributes = /Attributes: Agility (d\d+(\+\d+)?), Smarts (d\d+(\+\d+)?), Spirit (d\d+(\+\d+)?), Strength (d\d+(\+\d+)?), Vigor (d\d+(\+\d+)?)/
  
    let result = regexpAttributes.exec(value)
    let attributes = new Attributes

    if (result) {
      attributes.agility = new Trait(Number(result[1]), new Modifier(Number(result[2])))
      attributes.smarts = new Trait(Number(result[3]), new Modifier(Number(result[4])))
      attributes.spirit = new Trait(Number(result[5]), new Modifier(Number(result[6])))
      attributes.strength = new Trait(Number(result[7]), new Modifier(Number(result[8])))
      attributes.vigor = new Trait(Number(result[9]), new Modifier(Number(result[10])))
    }

    return attributes
  }
}
