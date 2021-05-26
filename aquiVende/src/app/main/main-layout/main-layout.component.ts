import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {

  favColor = 'whiteColor';
  countColor =  0;

  constructor() { }

  ngOnInit(): void {
  }

  colorChange(): void{
    if (this.countColor === 0){
      this.countColor = 1;
      this.favColor = 'redColor';
    }
    else{
      this.countColor = 0;
      this.favColor = 'whiteColor';
    }
  }
}
