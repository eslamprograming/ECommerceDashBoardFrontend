import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoryComponent } from './Category.component';
import { MainCategoryComponent } from './Componts/MainCategory/MainCategory.component';
import { HttpClientModule } from '@angular/common/http';
import { CreateCategoryComponent } from './Componts/CreateCategory/CreateCategory.component';
import { FormsModule } from '@angular/forms';
import { EditCategoryComponent } from './Componts/EditCategory/EditCategory.component';

@NgModule({
  imports: [
    CommonModule,HttpClientModule,FormsModule
  ],
  declarations: [CategoryComponent,MainCategoryComponent,CreateCategoryComponent,EditCategoryComponent],
  exports:[MainCategoryComponent,CreateCategoryComponent,EditCategoryComponent]
})
export class CategoryModule { }
