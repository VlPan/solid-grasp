
export interface Shape {
  area(): number;
}

export interface Serializable {
  serialize(): string;
}

export interface IRectangle {
  width: number;
  height: number;
}

export interface ICircle {
  radius: number;
}

export class Rectangle implements Shape, IRectangle {

  public width: number;
  public height: number;

  public area() {
      return this.width * this.height;
  }

}

export class Circle implements  Shape, ICircle {

  public radius: number;

  public area() {
      return this.radius * this.radius * Math.PI;
  }

}

export class RectangleDTO implements Serializable, IRectangle {

  public width: number;
  public height: number;

  public serialize() {
    return JSON.stringify(this);
  }
}

export class CircleDTO implements Serializable, ICircle {

  public radius: number;

  public serialize() {
    return JSON.stringify(this);
  }
}