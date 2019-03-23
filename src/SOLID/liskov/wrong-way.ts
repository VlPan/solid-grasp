/* Derived types must be completely substitutable for their base types. */


export class Parent {
  sum(arg1: number, arg2: number): any {
    return arg1 + arg2;
  }
}

export class Child extends Parent {
  sum(arg1: number, arg2: number) {
    return (arg1 + arg2).toString();
  }
}

export class SummerController {
  constructor(private delegate: Child) {}

  public sum(a: number, b: number) {
    return this.delegate.sum(5, 10);
  }
}

