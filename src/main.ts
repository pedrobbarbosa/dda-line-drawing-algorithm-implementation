import {Matriz} from "./matriz";

const matriz = new Matriz(12, 12);
matriz.populate();

matriz.dda(8,10,1,3, "\x1b[31m\u1FB4\x1b[0m"); // vermelho até azul
matriz.dda(9,1,8,10, "\x1b[32m\u1FB4\x1b[0m");  // verde até vermelho
matriz.dda(1,3,9,1, "\x1b[34m\u1FB4\x1b[0m"); // azul até o verde