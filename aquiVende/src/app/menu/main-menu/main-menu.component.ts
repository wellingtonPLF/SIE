import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';
import {DialogCartComponent} from '../dialog-cart/dialog-cart.component';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.scss']
})
export class MainMenuComponent implements OnInit {

  constructor(public dialog: MatDialog) {}

  openDialog(): void {
    this.dialog.open(DialogCartComponent, {
      backdropClass: 'backdropBackground'
    });
  }
  ngOnInit(): void {
  }
}
