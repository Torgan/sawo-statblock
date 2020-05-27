import { Modifier } from "../Tools/Modifier";

export class Trait {
  label: string
  dice: Number
  modifier: Modifier
  limited: boolean = false

  public constructor(
    label: string = '',
    dice: Number = 4, 
    modifier: Modifier = new Modifier(0),
    limited?: boolean
  ) {
    this.label = label
    this.dice = dice
    this.modifier = modifier
    
    if (limited !== undefined) {
      this.limited = limited
    }
  }

  public toDiceString() : string {
    return 'd' + this.dice + this.modifier.display() + (this.limited ? ' (A)' : '')
  }

  public toString(): string {
    return this.label + ' ' + this.toDiceString()
  }
}
