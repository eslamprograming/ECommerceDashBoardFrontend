import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResponseVM } from 'src/ModelVM/ResponseVM';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-MainProdeuct',
  templateUrl: './MainProdeuct.component.html',
  styleUrls: ['./MainProdeuct.component.css']
})
export class MainProdeuctComponent implements OnInit {
  responseobj:ResponseVM=new ResponseVM();
  responseobj2:ResponseVM=new ResponseVM();

  CategoryID:number=0;
  constructor(private http:HttpClient) { }

  ngOnInit() {
    this.AllCategory();
  }
  AllCategory(){
    this.http.get<any>(`${environment.apiUrl}api/Category/GetAllCategory`).subscribe(res=>{
      this.responseobj=res;
      console.log(this.responseobj);      
    },
    error=>{
      alert("errror");
    })
  }
  product(){
    this.http.get<any>(`${environment.apiUrl}api/Product/GetAllProductCategory?CategoryID=${this.CategoryID}`).subscribe(res=>{
      this.responseobj2=res;
      console.log(this.responseobj2);
    },
    error=>{
      alert("errror");
    })
  }

}
