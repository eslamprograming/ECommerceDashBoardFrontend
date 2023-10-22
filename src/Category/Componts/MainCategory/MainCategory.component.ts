import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResponseVM } from 'src/ModelVM/ResponseVM';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-MainCategory',
  templateUrl: './MainCategory.component.html',
  styleUrls: ['./MainCategory.component.css']
})
export class MainCategoryComponent implements OnInit {

  constructor(private http:HttpClient) { }

  respnseobj:ResponseVM=new ResponseVM();
  ngOnInit() {
    this.Category();
  }

  Category(){
    this.http.get<any>(`${environment.apiUrl}api/Category/GetAllCategory`).subscribe(res=>{
      this.respnseobj=res;
      console.log(this.respnseobj);      
    },
    error=>{
      alert("errror");
    })
  }
}
