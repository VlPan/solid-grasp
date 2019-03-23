import { Rectangle, Circle, RectangleDTO, CircleDTO } from './right-way';
import { IRunnable } from '../../global/interfaces/runnnable';


export class ISRunner implements IRunnable {
  runExample() {
    const r = new Rectangle();
    r.width = 12;
    r.height = 15;

    const s = new Circle();
    s.radius = 15;

    const rDto = new RectangleDTO();
    rDto.width = r.width;
    rDto.height = r.height;
    console.log('Rectangle DTO', rDto.serialize());
  
    const sDto = new CircleDTO();
    sDto.radius =  s.radius;
    console.log('Circle DTO', sDto.serialize());
  }
}
