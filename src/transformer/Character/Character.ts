import { Attributes } from "./Core/Attributes";

export class Character {
  attributes : Attributes = new Attributes()

  public statblock() : string {
    return this.attributes.statblock();
  }

  static parse(value: string) : Character {
    let character: Character = new Character()

    character.attributes = Attributes.parse(value)

    return character
  }
} 
