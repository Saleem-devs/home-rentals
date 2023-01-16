import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  menuItems: string[] = ['Home', 'Landlord', 'Tenants', 'Contact Us'];

  menu: HTMLElement | null = null;

  ngOnInit() {
    document.addEventListener('DOMContentLoaded', () => {
      this.menu = document.querySelector('.menu');
    });
  }

  showMenu() {
    if (this.menu) {
      this.menu.classList.add('show');
    }
  }
  closeMenu() {
    if (this.menu) {
      this.menu.classList.remove('show');
    }
  }
}
