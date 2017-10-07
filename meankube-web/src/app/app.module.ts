import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule, 
  MatCheckboxModule, 
  MatSidenavModule, 
  MatToolbarModule,
  MatCardModule,
  MatGridListModule,
  MatInputModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatIconModule
} from '@angular/material';
import 'hammerjs';


import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { Product } from './product';
import { ProductServiceImpl } from './product-service-impl';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    MenuListComponent,
    MenuItemComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  exports: [
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatIconModule
  ],
  providers: [
    {
      provide: 'PRODUCT_SERVICE',
      deps: [Http],
      useFactory(http: Http) {
        return new ProductServiceImpl(http);
      },
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
