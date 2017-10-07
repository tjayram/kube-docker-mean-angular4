import { Component, OnInit, Injectable, Inject } from '@angular/core';
import { environment } from '../environments/environment'
import {Router} from '@angular/router';
import {
  FormBuilder,
  FormGroup
} from '@angular/forms';
import { Product } from './product';
import { ProductService } from './product-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  myForm: FormGroup;

  constructor(private fb: FormBuilder, @Inject('PRODUCT_SERVICE') private productService : ProductService,  private router:Router) {
    this.myForm = fb.group({
      'meanKubeAPIUrl': [environment.meankube_api]
    });
    this.onSubmit = this.onSubmit.bind(this);
  }

  ngOnInit() {
  }

  onSubmit(value: any): void {
    console.log('you submitted value: ', value.meanKubeAPIUrl);  
    environment.meankube_api = value.meanKubeAPIUrl;
    console.log(environment.meankube_api);  
    this.productService.setRootUrl(value.meanKubeAPIUrl);

    this.myForm.disable();
    this.router.navigate(["products"]);
    
  }
}
