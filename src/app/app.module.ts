import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SheardMoudelsModule } from 'src/SheardMoudels/SheardMoudels.module';
import { RouterModule } from '@angular/router';
import { AuthModule } from 'src/Auth/Auth.module';
import { CategoryModule } from 'src/Category/Category.module';
import { ProductModule } from 'src/Product/Product.module';
import { OrderModule } from 'src/Order/Order.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SheardMoudelsModule,RouterModule,AuthModule,CategoryModule,ProductModule,OrderModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
