import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductsOpsComponent } from "./components/products-ops/products-ops.component";
import { ProductsComponent } from "./components/products/products.component"; 

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent
  },
  {
      path: 'products/:productId',
      component: ProductsOpsComponent
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule {

}