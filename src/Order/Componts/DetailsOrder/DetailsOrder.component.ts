import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResponseVM } from 'src/ModelVM/ResponseVM';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-DetailsOrder',
  templateUrl: './DetailsOrder.component.html',
  styleUrls: ['./DetailsOrder.component.css']
})
export class DetailsOrderComponent implements OnInit {

  constructor(private http:HttpClient) { }
  responseobj:ResponseVM=new ResponseVM();
  model:any;

  ngOnInit() {
    const Id=localStorage.getItem("productId");
    this.Details(Id);
  }
  Details(arg0: any) {
    this.http.get<any>(`${environment.apiUrl}api/Order/GetOrder?OrderID=${arg0}`).subscribe(
      res=>{
        this.responseobj=res;
        this.model=res.value.products;
        console.log(this.responseobj)
      },
      error=>{
        alert("error");
      }
    )
  }
}
