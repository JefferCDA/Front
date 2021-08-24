import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public form: FormGroup;
  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loadProducts();
    this.loadProduct(2);
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

  public loadProducts() {
    this.productsService.getAllProducts().subscribe(res => {
    console.log(res);
      
    });
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
  public deleteProduct() {
    console.log(this.form.value);
    this.productsService.deleteProduct(
      this.form.value.productId
    ).subscribe(res => {
      console.log(res);
      this.form.reset();
    })
  }

}
