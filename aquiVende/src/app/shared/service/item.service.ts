import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Item} from '../model/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  URL_PRODUTOSCART = 'http://localhost:3000/cart';

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Item []>{
    return this.httpClient.get<Item []>(this.URL_PRODUTOSCART);
  }

  inserir(item: Item): Observable<Item>{
    return this.httpClient.post<Item>(this.URL_PRODUTOSCART, item);
  }

  remover(id: string): Observable<object> {
    return this.httpClient.delete(`${this.URL_PRODUTOSCART}/${id}`);
  }

  pesquisarPorId(id: string): Observable<Item> {
    return this.httpClient.get<Item>(`${this.URL_PRODUTOSCART}/${id}`);
  }

  atualizar(item: Item, it: Item): Observable<Item> {
    return this.httpClient.put<Item>(`${this.URL_PRODUTOSCART}/${item.id}`, it);
  }
}
