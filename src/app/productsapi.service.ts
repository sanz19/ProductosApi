import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsapiService {


  productos = [] as any;

  constructor(private http: HttpClient) {
  }
    obtenerProductos()
    {
      return this.http.get('https://fakestoreapi.com/products');
    }

    obtenerProducto(id: number)
    {
      return this.http.get('https://fakestoreapi.com/products/' + id );
    }

}
