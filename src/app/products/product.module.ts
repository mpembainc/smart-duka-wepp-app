import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [RouterModule.forChild([
    {
      path: '',
      component: ProductsComponent
    }
  ])],
  declarations: [ProductsComponent]
})
export class ProductsModule { }
