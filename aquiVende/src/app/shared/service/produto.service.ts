import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Produto} from '../../shared/model/produto';

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  URL_PRODUTOS = 'http://localhost:3000/produtos';

  constructor(private httpClient: HttpClient) {
  }

  listar(): Observable<Produto []>{
    return this.httpClient.get<Produto []>(this.URL_PRODUTOS);
  }
}
