import { Product } from './product';
import {Observable} from 'rxjs';

export interface ProductService {
    getProducts() : Observable<Product[]>;
}
