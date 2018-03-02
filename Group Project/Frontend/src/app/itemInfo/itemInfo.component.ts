import { Component, OnInit } from '@angular/core';



import { NbMenuItem } from '@nebular/theme/components/menu/menu.service';

@Component({
    selector: 'app-itemInfo',
    template: `
    <ngx-main-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-main-layout>
  `
})
export class itemInfoComponent implements OnInit {


    ngOnInit() {

    }
}