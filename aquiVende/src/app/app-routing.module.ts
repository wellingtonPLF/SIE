import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CadastrarUsuarioComponent} from './usuario/cadastrar-usuario/cadastrar-usuario.component';
import {ListarUsuarioComponent} from './usuario/listar-usuario/listar-usuario.component';
import {MainLayoutComponent} from './main/main-layout/main-layout.component';

const routes: Routes = [
  {
    path: 'cadastrar',
    component: CadastrarUsuarioComponent
  },
  {
    path: 'listar',
    component: ListarUsuarioComponent
  },
  {
    path: '',
    component: MainLayoutComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
