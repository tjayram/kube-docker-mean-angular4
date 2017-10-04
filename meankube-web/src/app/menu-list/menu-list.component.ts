import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { Product } from '../product';
import { ProductService } from '../product-service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css']
})

@Injectable()
export class MenuListComponent implements OnInit {
  public products: Product[]
  constructor(@Inject('PRODUCT_SERVICE') private productService : ProductService) { }

  ngOnInit() {
    this.productService
        .getProducts()
        .subscribe(
          (results: Product[]) => {
            this.products = results;
          }
        );
  }

}
