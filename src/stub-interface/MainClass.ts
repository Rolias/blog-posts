import {Helper} from './Helper'
export class MainClass {
  private myHelper: Helper
  public constructor(helper: Helper) {
    this.myHelper = helper
  }
  public run() {
    this.myHelper.thing1()
    this.myHelper.thing2()
  }
}
