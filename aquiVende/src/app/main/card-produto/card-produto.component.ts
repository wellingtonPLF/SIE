import { Component, OnInit } from '@angular/core';
import {Produto} from '../../shared/model/produto';
import {ProdutoService} from '../../shared/service/produto.service';
import {ItemService} from '../../shared/service/item.service';
import {Item} from '../../shared/model/item';
import {ProdutoFirestoreService} from '../../shared/service/produto-firestore.service';
import {ItemFirestoreService} from '../../shared/service/item-firestore.service';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss']
})
export class CardProdutoComponent implements OnInit {

  produtos!: Array<Produto>;

  constructor(private produtoService: ProdutoService, private itemService: ItemService) {
  }

  ngOnInit(): void {
    this.produtoService.listar().subscribe(
      produtos => this.produtos = produtos
    );
  }

  inserirNoCart(produto: Produto): void {
    this.itemService.listar().subscribe(
    itens => {
        if (itens.find(e => e.id === produto.id.toString())){
            this.itemService.pesquisarPorId(produto.id.toString()).subscribe(
              item => this.itemService.atualizar(item, new Item(item.id, item.qnt + 1 , produto)).subscribe(
                it => console.log()
              )
            );
            console.log(`It's already on database!`);
        }
        else{
          this.itemService.inserir(new Item(produto.id.toString(), 1, produto)).subscribe(
            produt => console.log());
        }
      }
    );
  }
}
