import { Injectable } from '@angular/core';
import { Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';
import { AlbumStorePage } from './../../e2e/app.po';
import { Observable } from 'rxjs';
import { Album } from './album';
import { Product } from './product';

@Injectable()
export class ProductService {

  private _productsUrl = '../assets/products.json';

  constructor(private _http: Http) { }

  private _albumUrl: '../AlbumStorePage';

  getAlbum(id:number): Observable<Album>{
    return this._http.get(this._albumUrl).map((response)=><Album>response.json());
  }

  getProducts(): Observable<Product[]>{
    return this._http.get(this._productsUrl).map((response)=> <Product[]>response.json());
  }
}
