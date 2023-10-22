import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ResponseVM } from 'src/ModelVM/ResponseVM';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-MainOrder',
  templateUrl: './MainOrder.component.html',
  styleUrls: ['./MainOrder.component.css']
})
export class MainOrderComponent implements OnInit {

  constructor(private http:HttpClient) { }
  responseobj:ResponseVM=new ResponseVM();
  ngOnInit() {
    this.AllOrder();
  }

  AllOrder(){
    this.http.get<any>(`${environment.apiUrl}api/Order/GetAllOrder`).subscribe(res=>{
      this.responseobj=res;
      console.log(this.responseobj);      
    },
    error=>{
      alert("errror");
    })
  }

}
