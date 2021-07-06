import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/interface/menu';
import { MenuService } from 'src/app/service/menu.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  menu: Menu[] = [];

  constructor(private _menuService: MenuService) { }

  ngOnInit(): void {
    this.caricareMenu();
  }

  caricareMenu(){
    this._menuService.getMenu().subscribe(data =>{
      this.menu = data;
    })
  }
}
