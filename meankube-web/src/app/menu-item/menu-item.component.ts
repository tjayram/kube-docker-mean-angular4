import { Component, OnInit, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit {
  @Input() product: Product
  constructor() { }

  ngOnInit() {
  }

}
