import { Trait } from "../Core/Trait";
import { Modifier } from "../Tools/Modifier";

export class Attributes {
  agility: Trait = new Trait('Agilité', 4, new Modifier(0))
  smarts: Trait = new Trait('Intellect', 4, new Modifier(0))
  spirit: Trait = new Trait('Âme', 4, new Modifier(0))
  strength: Trait = new Trait('Force', 4, new Modifier(0))
  vigor: Trait = new Trait('Vigueur', 4, new Modifier(0))

  public statblock() : string {
    return 'Agi\tÂme\tFor\tInt\tVig\n' +
      this.agility.toDiceString() + '\t' +
      this.spirit.toDiceString() + '\t' +
      this.strength.toDiceString() + '\t' +
      this.smarts.toDiceString() + '\t' +
      this.vigor.toDiceString() + '\n'
  } 

  static parse(value: string) : Attributes {
    let regexpAttributes = /Attributes: Agility d(\d+)([+-]\d+)?, Smarts d(\d+)([+-]\d+)?( \(A\))?, Spirit d(\d+)([+-]\d+)?, Strength d(\d+)([+-]\d+)?, Vigor d(\d+)([+-]\d+)?/
  
    let result = regexpAttributes.exec(value)
    let attributes = new Attributes()

    if (result) {
      attributes.agility = new Trait(
        'Agilité', 
        Number(result[1]), 
        new Modifier(Number(result[2] ? result[2] : 0))
      )
      attributes.smarts = new Trait(
        'Intellect', 
        Number(result[3]), 
        new Modifier(Number(result[4] ? result[4] : 0)),
        (result[5] !== undefined)
      )
      console.log(result[5] !== undefined)
      attributes.spirit = new Trait(
        'Âme', 
        Number(result[6]), 
        new Modifier(Number(result[7] ? result[7] : 0))
      )
      attributes.strength = new Trait(
        'Force', 
        Number(result[8]), 
        new Modifier(Number(result[9] ? result[9] : 0))
      )
      attributes.vigor = new Trait(
        'Vigueur', 
        Number(result[10]), 
        new Modifier(Number(result[11] ? result[11] : 0))
      )
    }

    return attributes
  }
}
