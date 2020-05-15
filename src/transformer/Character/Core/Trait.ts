import { Modifier } from "../Tools/Modifier";

export class Trait {
  dice: Number
  modifier: Modifier

  public constructor(dice: Number = 4, modifier: Modifier = new Modifier(0)) {
    this.dice = dice
    this.modifier = modifier
  }

  public display() : string {
    return 'd' + this.dice + this.modifier.display()
  }
}
