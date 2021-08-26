import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-products-ops',
  templateUrl: './products-ops.component.html',
  styleUrls: ['./products-ops.component.scss']
})
export class ProductsOpsComponent implements OnInit {
  public form: FormGroup;
  @Input() ope: number;
  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder
    ) { }

  ngOnInit(): void {
    this.formBuilderCreate();
  }
  private formBuilderCreate() {
    this.form = this.formBuilder.group({
      productId: [], 
      name: [],
      description: new FormControl(),
      price: [],
      brand: [],
      url: [],
    })
  }
  
  public loadProduct(id: number) {
    this.productsService.getProduct(id).subscribe(res => {
      console.log(res);
    });
  }
  
  public createProduct() {
    console.log(this.form.value);
    this.productsService.postProduct(
      this.form.value
    ).subscribe(res => {
      console.log(res);
      this.form.reset();
    })
  }
  public updateProduct() {
    console.log(this.form.value);
    this.productsService.putProduct(
      this.form.value.productId,
      this.form.value
    ).subscribe(res => {
      console.log(res); 
      this.form.reset();
    })
  }
}
