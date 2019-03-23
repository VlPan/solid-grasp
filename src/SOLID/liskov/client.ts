import { IRunnable } from '../../global/interfaces/runnnable';
import { Child, SummerController, Parent } from './wrong-way';


export class LRunner implements IRunnable {
  runExample() {
    const fc1 = new SummerController(new Parent());

    const res = fc1.sum(5, 4);
    console.log(res);
    console.log(typeof res);
  }
}
