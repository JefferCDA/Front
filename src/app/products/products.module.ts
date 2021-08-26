import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './components/products/products.component';
import { ProductsOpsComponent } from './components/products-ops/products-ops.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductsRoutingModule } from './products-routing.module';
@NgModule({
  declarations: [
    ProductsComponent,
    ProductsOpsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    ProductsRoutingModule
  ],
  exports: [
    ProductsComponent,
    ProductsOpsComponent
  ]
})
export class ProductsModule { }
