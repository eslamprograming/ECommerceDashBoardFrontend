import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/Auth/Componts/Login/Login.component';
import { RegisterComponent } from 'src/Auth/Componts/Register/Register.component';
import { MainCategoryComponent } from 'src/Category/Componts/MainCategory/MainCategory.component';
import { MainOrderComponent } from 'src/Order/Componts/MainOrder/MainOrder.component';
import { MainProdeuctComponent } from 'src/Product/Componts/MainProdeuct/MainProdeuct.component';
import { HomeComponent } from 'src/SheardMoudels/Componts/Home/Home.component';
import { LayoutComponent } from './Layout/Layout.component';
import { CreateCategoryComponent } from 'src/Category/Componts/CreateCategory/CreateCategory.component';
import { CreateProductComponent } from 'src/Product/Componts/CreateProduct/CreateProduct.component';
import { EditCategoryComponent } from 'src/Category/Componts/EditCategory/EditCategory.component';
import { EditProductComponent } from 'src/Product/Componts/EditProduct/EditProduct.component';
import { EditOrderComponent } from 'src/Order/Componts/EditOrder/EditOrder.component';
import { DetailsOrderComponent } from 'src/Order/Componts/DetailsOrder/DetailsOrder.component';

const routes: Routes = [
  {path:'',component:LayoutComponent,children:[
    {path:'',component:HomeComponent},
  {path:'Category',component:MainCategoryComponent},
  {path:'Order',component:MainOrderComponent},
  {path:'Product',component:MainProdeuctComponent},
  {path:'CreateCategory',component:CreateCategoryComponent},
  {path:'CreateProduct',component:CreateProductComponent},
  {path:'EditCategory',component:EditCategoryComponent},
  {path:'EditProduct',component:EditProductComponent},
  {path:'EditOrder',component:EditOrderComponent},
  {path:'DetailsOrder',component:DetailsOrderComponent},


  ],},
  {path:'Register',component:RegisterComponent},
  {path:'Login',component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
