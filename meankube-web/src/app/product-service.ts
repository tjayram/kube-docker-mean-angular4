import { Product } from './product';
import {Observable} from 'rxjs';

export interface ProductService {
    setRootUrl(url: string) : void;
    getProducts() : Observable<Product[]>;
}
