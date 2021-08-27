import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../../core/services/products/products.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Product } from 'src/app/product.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  product: Product[];
  public form: FormGroup;
  showM: String;
  ops = true;
  title: string;

  constructor(
    private productsService: ProductsService,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.loadProducts();
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
      this.product = res.result;
      console.log(this.product);
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
    try {
      this.productsService.putProduct(
        this.form.value.productId,
        this.form.value
      ).subscribe(res => {
        console.log(res);
        this.form.reset();
      })
    } catch (error) {
      console.log(error);
    }

  }
  showModal(event: string, titlo: string) {
    console.log(titlo);
    this.showM = event;
    this.title = titlo;
  }
  cModal(e: string) {
    this.showM = e;
    console.log(this.showM);
  }

  public deleteProduct(productId: number) {
    try {
      this.productsService.deleteProduct(productId)
        .subscribe(res => {
          this.loadProducts();
        })
    } catch (error) {
      console.log(error);
    }


  }
  navigation(url: string, productId: number) {

    // switch (productId) {
    //   case 0:
    //     this.router.navigate([`${url}/${0}`]);
    //     break;
    //   default:
    //     this.router.navigate([`${url}/${productId}`]);
    //     break;
    // }

  }

}
