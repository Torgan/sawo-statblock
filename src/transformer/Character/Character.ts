import { Attributes } from "./Core/Attributes";

export class Character {
  attributes : Attributes = new Attributes

  public constructor() {
  }

  public statblock() : string {
    return this.attributes.statblock();
  }

  public parse(value: string) {
    this.attributes = Attributes.parse(value)
  }
} 
