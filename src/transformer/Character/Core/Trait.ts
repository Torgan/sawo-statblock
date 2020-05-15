import { Dice } from "../Tools/Dice";
import { Modifier } from "../Tools/Modifier";
import { sprintf } from "sprintf-js";

export class Trait {
  dice: Dice
  modifier: Modifier

  public constructor(dice: Dice = Dice.d4, modifier: Modifier = new Modifier(0)) {
    this.dice = dice
    this.modifier = modifier
  }

  public display() : string {
    return 'd' + this.dice + this.modifier.display
  }
}
