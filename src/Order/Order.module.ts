import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from './Order.component';
import { HttpClientModule } from '@angular/common/http';
import { MainOrderComponent } from './Componts/MainOrder/MainOrder.component';

@NgModule({
  imports: [
    CommonModule,HttpClientModule
  ],
  declarations: [OrderComponent,MainOrderComponent],
  exports:[MainOrderComponent]
})
export class OrderModule { }
