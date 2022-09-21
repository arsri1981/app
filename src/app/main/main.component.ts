import { Component, OnInit } from '@angular/core';
import { Product } from '../interfaces/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
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
