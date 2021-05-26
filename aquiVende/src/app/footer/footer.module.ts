import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFooterComponent } from './main-footer/main-footer.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
    declarations: [
        MainFooterComponent
    ],
    exports: [
        MainFooterComponent
    ],
    imports: [
        CommonModule,
        MatButtonModule,
        MatIconModule,
        BrowserAnimationsModule
    ]
})
export class FooterModule { }
