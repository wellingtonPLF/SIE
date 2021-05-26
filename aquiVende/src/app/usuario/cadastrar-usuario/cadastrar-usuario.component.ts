import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/service/usuario.service';
import {UsuarioFirestoreService} from '../../shared/service/usuario-firestore.service';

@Component({
  selector: 'app-cadastrar-usuario',
  templateUrl: './cadastrar-usuario.component.html',
  styleUrls: ['./cadastrar-usuario.component.scss']
})
export class CadastrarUsuarioComponent implements OnInit {

  usuario: Usuario;

  constructor(private usuarioService: UsuarioService) {
    this.usuario = new Usuario();
  }

  ngOnInit(): void {
  }

  inserirUsuario(): void {
    if (this.usuario.nome != null && this.usuario.cpf != null && this.usuario.idade != null){
      this.usuarioService.inserir(this.usuario).subscribe(
        usuario => console.log(usuario)
      );
      this.usuario = new Usuario();
    }
  }

}
