import {Helper} from './Helper'
export class CatWithHat {
  private myHelper: Helper
  public constructor(helper: Helper) {
    this.myHelper = helper
  }
  public run() {
    this.myHelper.thing1()
    this.myHelper.thing2()
  }
}
