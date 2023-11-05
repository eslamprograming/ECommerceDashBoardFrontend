import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './Order.component';
import { HttpClientModule } from '@angular/common/http';
import { MainOrderComponent } from './Componts/MainOrder/MainOrder.component';
import { EditOrderComponent } from './Componts/EditOrder/EditOrder.component';
import { FormsModule } from '@angular/forms';
import { DetailsOrderComponent } from './Componts/DetailsOrder/DetailsOrder.component';

@NgModule({
  imports: [
    CommonModule,HttpClientModule,FormsModule
  ],
  declarations: [OrderComponent,MainOrderComponent,EditOrderComponent,DetailsOrderComponent],
  exports:[MainOrderComponent,EditOrderComponent,DetailsOrderComponent]
})
export class OrderModule { }
