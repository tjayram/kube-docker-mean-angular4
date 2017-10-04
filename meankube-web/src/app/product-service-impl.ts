import {Injectable, Inject} from '@angular/core'
import { Http, Response } from '@angular/http';
import { ProductService } from './product-service'
import { Product } from './product'
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import {environment} from '../environments/environment';

@Injectable()
export class ProductServiceImpl implements ProductService {

    private dbRef: any;
    private productSchema : any;
    private productModel: any;



    constructor(private http : Http) {

    }

    getProducts() : Observable<Product[]> {
        
        let products = [];

        let productsUrl = environment.meankube_api + "products";
        console.log(productsUrl);
        
        return this.http
                   .get(productsUrl)
                   .map( res => {
                     return res
                            .json()
                            .map(item => {
                                return new Product(
                                    item.title,
                                    item.subTitle,
                                    item.desc,
                                    item.price,
                                    item.imageUrl
                                )
                            });
                     });
    }
}
