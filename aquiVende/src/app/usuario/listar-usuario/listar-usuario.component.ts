import { Component, OnInit } from '@angular/core';
import {Usuario} from '../../shared/model/usuario';
import {UsuarioService} from '../../shared/service/usuario.service';
import {UsuarioFirestoreService} from '../../shared/service/usuario-firestore.service';
import {PageEvent} from '@angular/material/paginator';

@Component({
  selector: 'app-listar-usuario',
  templateUrl: './listar-usuario.component.html',
  styleUrls: ['./listar-usuario.component.scss']
})
export class ListarUsuarioComponent implements OnInit {
  title = 'Users';
  usuarios!: Array<Usuario>;
  userLength!: number;
  pageSlice!: Array<Usuario>;
  eventlength = 2;
  pageLength!: number;

  constructor(private usuarioService: UsuarioService) {
  }

  ngOnInit(): void {
    this.usuarioService.listar().subscribe(
      usuarios => {
        this.usuarios = usuarios;
        this.pageSlice = usuarios.slice(0, this.eventlength);
        this.userLength = usuarios.length;
        this.pageLength = Math.ceil(usuarios.length / this.eventlength);
      }
    );
  }

  onPageChange(event: PageEvent): void{
    const startIndex = event.pageIndex * this.eventlength;
    let endIndex = startIndex + this.eventlength;
    if (endIndex > this.userLength){
      endIndex = this.userLength;
    }
    this.pageSlice = this.usuarios.slice(startIndex, endIndex);
  }
}
