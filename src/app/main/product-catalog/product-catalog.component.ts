import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/interfaces/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-catalog',
  templateUrl: './product-catalog.component.html',
  styleUrls: ['./product-catalog.component.css']
})
export class ProductCatalogComponent implements OnInit {
  products: Product[] = []
  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.service.all().subscribe(
      products => {
        this.products = products
      }
    )
  }

}