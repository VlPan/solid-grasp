export class Rectangle {
  public width: number;
  public height: number;
}

export class Circle {
  public radius: number;
}

export function getArea(shapes: (Rectangle|Circle)[]) {
  return shapes.reduce(
      (previous, current) => {
          if (current instanceof Rectangle) {
              return previous + (current.width * current.height);
          } else if (current instanceof Circle) {
              return previous + (current.radius * current.radius * Math.PI);
          } else {
              throw new Error("Unknown shape!")
          }
      },
      0
  );
}