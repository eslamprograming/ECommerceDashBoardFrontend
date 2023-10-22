import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './Auth.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegisterComponent } from './Componts/Register/Register.component';
import { LoginComponent } from './Componts/Login/Login.component';

@NgModule({
  imports: [
    CommonModule,FormsModule,HttpClientModule
  ],
  declarations: [AuthComponent,RegisterComponent,LoginComponent],
  exports:[RegisterComponent,LoginComponent]
})
export class AuthModule { }
