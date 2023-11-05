import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseVM } from 'src/ModelVM/ResponseVM';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-MainOrder',
  templateUrl: './MainOrder.component.html',
  styleUrls: ['./MainOrder.component.css']
})
export class MainOrderComponent implements OnInit {
Details(arg0: any) {
  localStorage.setItem("productId",arg0);
  this.router.navigate(['/DetailsOrder']);
}

  constructor(private http:HttpClient,private router:Router) { }
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
  Delete(orderID:any){
    var delcon=confirm("Are You Sure To Delete");
    if(delcon===false){

    }
    else{
    this.http.delete<any>(`${environment.apiUrl}api/Order/DeleteOrder?OrderID=${orderID}`).subscribe(
      res=>{
        location.reload();
      },
      error=>{
        alert("error");
      }
    )
    }
  }
  Edit(item:any){
    localStorage.setItem("Order",JSON.stringify(item));
    this.router.navigate(['/EditOrder']);
  }

}
