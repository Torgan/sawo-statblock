import { sprintf } from 'sprintf-js';

export class Modifier {
  value: number = 0

  public constructor(value: number = 0) {
    this.value = value
  }
  /**
   * display
   */
  public display() : string {
    if (this.value === 0) {
      return ''
    }
    return sprintf('%+d', this.value)
  }
}
