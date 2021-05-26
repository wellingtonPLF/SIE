import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';
import { CarouselSliderComponent } from './carousel-slider/carousel-slider.component';
import {MatCardModule} from '@angular/material/card';
import { CardProdutoComponent } from './card-produto/card-produto.component';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    MainLayoutComponent,
    CarouselSliderComponent,
    CardProdutoComponent
  ],
  exports: [
    MainLayoutComponent,
    CarouselSliderComponent,
    CardProdutoComponent
  ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatMenuModule,
        MatCardModule,
        FormsModule,
        RouterModule
    ]
})export class MainModule { }
