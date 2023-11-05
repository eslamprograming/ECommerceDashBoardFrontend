import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './Product.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MainProdeuctComponent } from './Componts/MainProdeuct/MainProdeuct.component';
import { CreateProductComponent } from './Componts/CreateProduct/CreateProduct.component';
import { EditProductComponent } from './Componts/EditProduct/EditProduct.component';

@NgModule({
  imports: [
    CommonModule,HttpClientModule,FormsModule
  ],
  declarations: [ProductComponent,MainProdeuctComponent,CreateProductComponent,EditProductComponent],
  exports:[MainProdeuctComponent,CreateProductComponent,EditProductComponent]
})
export class ProductModule { }
