import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Http, HttpModule, Response, ResponseOptions } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
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
  MatIconModule,
  MatInput
} from '@angular/material';
import 'hammerjs';


import { AppComponent } from './app.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { MenuListComponent } from './menu-list/menu-list.component';
import { MenuItemComponent } from './menu-item/menu-item.component';
import { Product } from './product';
import { ProductServiceImpl } from './product-service-impl';

const routes:Routes = [
  { path: "", redirectTo: "home", pathMatch: "full"},
  { path: "products", component: MenuListComponent}
]

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
    ReactiveFormsModule,
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
    MatIconModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatCardModule,
    MatGridListModule,
    MatInputModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatIconModule,
    RouterModule
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
