import { getArea, Rectangle, Circle, Shape } from './right-way';
import { IRunnable } from '../../global/interfaces/runnnable';


export class ORunner implements IRunnable {
  runExample() {
    const r = new Rectangle();
    r.width = 10;
    r.height = 10;

    const c = new Circle();
    c.radius = 20;

    const toPrint = [c, r];
    this.printResult(toPrint);
  }

  printResult(toPrint: Shape[]) {
    console.log(`The area of Circle and Rectanle is ${getArea(toPrint)}`)
  }
}
