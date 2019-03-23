import { IRunnable } from './../../global/interfaces/runnnable';
import { Person, Email } from './right-way';


export class SRunner implements IRunnable {
  runExample() {
    const testPerson = new Person('John', 'Doe', new Email('JohnDoe@gmail.com'));
    this.printResult(testPerson);
  }

  printResult(testPerson: Person) {
    console.log('Email was validating throught Validator class')
    console.log(JSON.stringify(testPerson))
  }
}

 