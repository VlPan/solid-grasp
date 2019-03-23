import { IRunnable } from './global/interfaces/runnnable';
import { SRunner } from './SOLID/single-responsibility/clinet';
import { ORunner } from './SOLID/open-closed/client';
import { ISRunner } from './SOLID/interface-segregation/client';
import { LRunner } from './SOLID/liskov/client';
const readline = require('readline') ;

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question(`What to run ?
  ========== SOLID ===========
  1. S - Single resposibility
  2. O - Open/closed
  3. L - Liskou
  4. I - Interface segragation
  5. D - Dependency inversion
  ========== GRASP ============
  6. Information Expert
  7. Low coupling
  8. High cohesion
  9. Controller
  10. Creator
  11. Polymorphism
  12. Protected variations
  13. Pure fabrication
  14. Indirection
`, function(answer: string) {
    switch(answer) {
      case '1': {
        const runner = new SRunner();
        runner.runExample();
      }
      case '2': {
        const runner = new ORunner();
        runner.runExample();
      }
      case '3': {
        const runner = new LRunner();
        runner.runExample();
      }
    }
    rl.close();
});


rl.on("close", function() {
  process.exit(0);
});