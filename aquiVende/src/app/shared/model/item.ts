import {Produto} from './produto';

export class Item{
  id!: string;
  qnt!: number;
  taxa!: number;
  produto!: Produto;

  constructor(id: string, qnt: number, produto: Produto) {
    this.id = id;
    this.qnt = qnt;
    this.produto = produto;
  }
}
