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
import { LayoutComponent } from './Layout/Layout.component';
import { FormsModule } from '@angular/forms';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptor } from './interceptors/token-interceptor.service';

@NgModule({
  declarations: [	
    AppComponent,
      LayoutComponent
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,
    SheardMoudelsModule,RouterModule,AuthModule,CategoryModule,ProductModule,OrderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
