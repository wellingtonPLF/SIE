import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {ItemService} from '../../shared/service/item.service';
import {Produto} from '../../shared/model/produto';
import {Item} from '../../shared/model/item';
import {ItemFirestoreService} from '../../shared/service/item-firestore.service';

@Component({
  selector: 'app-dialog-cart',
  templateUrl: './dialog-cart.component.html',
  styleUrls: ['./dialog-cart.component.scss']
})
export class DialogCartComponent implements OnInit {

  cart!: Array<Item>;

  constructor(private itemService: ItemService) {}

  ngOnInit(): void {
    this.itemService.listar().subscribe(
      produtos => this.cart = produtos
    );
  }

  removerProduto(produto: Produto): void {
    this.itemService.pesquisarPorId(produto.id.toString()).subscribe(
      item => {
        if (item.qnt > 1){
            this.itemService.atualizar(item, new Item(item.id, item.qnt - 1, produto)).subscribe(
              it => console.log()
            );
            this.cart[this.cart.findIndex(x => x.id === item.id)].qnt = item.qnt - 1;
        }
        else{
          this.itemService.remover(produto.id.toString()).subscribe(
            produt => {
              const index = this.cart.findIndex(p => p.produto === produto);
              this.cart.splice(index, 1);
            });
        }
      }
    );
  }
}
