import {Vertice} from "./vertice";

class Matriz {
  public lines: number;
  public columns: number;
  public matriz: any[];

  constructor(lines = 1, columns = 1) {
    this.lines = lines;
    this.columns = columns
    this.matriz = [];
  }

  public populate(): void  {

    for (let y = 0; y < this.lines; y++) {
      this.matriz[y] = new Array(this.columns);
      for (let x = 0; x < this.columns; x++) {
        this.matriz[y][x] = "\u1FB4";
      // this.matriz[x][y] = new Vertice(x,y);
      }
    }

    this.matriz[10][8] = '\x1b[31mred\x1b[0m';
    this.matriz[3][1] = '\x1b[34mblue\x1b[0m';
    this.matriz[1][9] = '\x1b[32mgreen\x1b[0m';
  }

  public dda(x: number,y: number, x1: number, y1: number, color: string) {
    let dx: number = x1 - x;
    let dy: number = y1 - y;

    // console.log(`dx: ${dx} dy: ${dy}`);

    const adx = Math.abs(dx);
    const ady = Math.abs(dy);

    // console.log(`adx: ${adx} ady: ${ady}`);

    const steps = adx > ady ? adx : ady;

    // console.log(steps);

    // distância x e y divididos pela quantidade de passos
    dx = dx / steps;
    dy = dy /steps;

    for (let i = 0; i < steps; i++) {
      // yield {x,y};
      this.matriz[y][x] = color;

      x += Math.round(dx)
      y += Math.round(dy)

      // this.matriz[y][x] = color;

      // console.log(x,y);
    }

    this.matriz.map( (line, index) => {
      console.log(`${index} [${line}]`);
    });

  }
}

export {Matriz};