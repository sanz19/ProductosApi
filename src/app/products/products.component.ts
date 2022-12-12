import { Component, OnInit } from '@angular/core';
import { ProductsapiService } from '../productsapi.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  productos = [] as any;
  loading = false;

  constructor(private services: ProductsapiService) { }

  ngOnInit(): void {
    this.loading = true;
    this.services.obtenerProductos().subscribe((resp: any)=>{
      this.productos = resp;
      console.log('Productos:', this.productos);
      this.loading = false;
    })
  }

}
