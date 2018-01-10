import { Component, style, trigger, animate, state, transition, keyframes } from '@angular/core';
import { truncateSync } from 'fs';
import { Tree } from '@angular/router/src/utils/tree';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('myTrigger', [
      state('collapsed', style({ height: '0px' })),
      state('expanded', style({ height: 'auto' })),
      transition('collapsed <=> expanded', animate('500ms fade-in'))
    ])
  ]
})

export class AppComponent {
  state = 'collapsed';

  /*Expand-Collapse Button*/
  homeShow: boolean;
  isShow: boolean;
  isShop: boolean;
  isRefill: boolean;
  isActivate: boolean;
  isHelp: boolean;
  isMyAccount: boolean;
  isDeals: boolean;
  isMobile: boolean;
  navmenu = {tabone: 'Shop', tabtwo: 'Refill / Add', tabthree: 'Activate', tabfour: 'Help', tabfive: 'Deals'};

  mobileMenu() {
    this.isMobile = !this.isMobile;
  }

  showMenu() {
    this.isShow = true;
    this.state = (this.state === 'collapsed' ? 'expanded' : 'collapsed');
  }

  shopMenu() {
    this.isShow = true;
    this.isShop = true;
    this.isRefill = false;
    this.isActivate = false;
    this.isHelp = false;
    this.isMyAccount = false;
  }

  refillMenu() {
    this.isShow = true;
    this.isRefill = true;
    this.isShop = false;
    this.isActivate = false;
    this.isHelp = false;
    this.isMyAccount = false;
  }

  myaccount() {
    this.isShow = false;
    this.isHelp = true;
    this.isRefill = false;
    this.isActivate = false;
    this.isShop = false;
    this.isMyAccount = false;
  }

  deals() {
    this.isShow = false;
    this.isHelp = true;
    this.isRefill = false;
    this.isActivate = false;
    this.isShop = false;
    this.isMyAccount = false;
  }

  helpMenu() {
    this.isShow = true;
    this.isHelp = true;
    this.isRefill = false;
    this.isActivate = false;
    this.isShop = false;
    this.isMyAccount = false;
  }

  activateMenu() {
    this.isShow = false;
    this.isActivate = false;
    this.isRefill = false;
    this.isShop = false;
    this.isHelp = false;
    this.isMyAccount = false;
  }

  homeMenu() {
    this.isShow = false;
    this.isRefill = false;
    this.isActivate = false;
    this.isHelp = false;
    this.isShop = false;
    this.isMyAccount = false;
  }

  closeMenu() {
    this.isShow = false;
    this.isActivate = false;
    this.isRefill = false;
    this.isShop = false;
    this.isHelp = false;
    this.isMyAccount = false;
  }
}
