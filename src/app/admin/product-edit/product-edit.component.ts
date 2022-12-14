import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  form: FormGroup;
  id: number;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private service: ProductService,
    private router: Router
    ) {
    this.form = this.formBuilder.group({
      title: '',
      image: ''
    })

    this.id = this.route.snapshot.params['id'];

    this.service.get(this.id).subscribe(
      product => this.form.patchValue(product)
    )

   }

  ngOnInit(): void {
    
  }

  submit(): void {
    this.service.update(this.id, this.form.getRawValue()).subscribe(
      () => {
        this.router.navigate(['/admin/products'])
      }
    )
  }

}