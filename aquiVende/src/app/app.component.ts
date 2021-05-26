import { Component } from '@angular/core';
import {Usuario} from 'src/app/shared/model/usuario';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'projeto';
  usuario: Usuario;

  constructor() {
    this.usuario = new Usuario();
    this.usuario.nome = 'Wellington';
  }

  metodo_a_ser_aplicado(): void{
    console.log('enviou');
  }
}
