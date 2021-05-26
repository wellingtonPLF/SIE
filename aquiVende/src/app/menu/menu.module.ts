import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainMenuComponent } from './main-menu/main-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {RouterModule} from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogCartComponent } from './dialog-cart/dialog-cart.component';


@NgModule({
    declarations: [
        MainMenuComponent,
        DialogCartComponent
    ],
    exports: [
        MainMenuComponent
    ],
  imports: [
    CommonModule,
    MatIconModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule
  ]
})
export class MenuModule { }
