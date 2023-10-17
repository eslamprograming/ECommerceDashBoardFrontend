import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SheardMoudelsComponent } from './SheardMoudels.component';
import { SidebarComponent } from './Componts/Sidebar/Sidebar.component';
import { HeaderComponent } from './Componts/Header/Header.component';
import { HomeComponent } from './Componts/Home/Home.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,FormsModule
  ],
  declarations: [SheardMoudelsComponent,SidebarComponent,HeaderComponent,HomeComponent],
  exports:[SidebarComponent,HeaderComponent,HomeComponent]
})
export class SheardMoudelsModule { }
