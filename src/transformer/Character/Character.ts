import { Attributes } from "./Core/Attributes";
import { Skills } from "./Core/Skills";

export class Character {
  attributes : Attributes = new Attributes()
  skills : Skills = new Skills()

  public statblock() : string {
    return this.attributes.statblock() + 
      this.skills.statblock();
  }

  static parse(value: string) : Character {
    let character: Character = new Character()

    character.attributes = Attributes.parse(value)
    character.skills = Skills.parse(value)

    return character
  }
} 
