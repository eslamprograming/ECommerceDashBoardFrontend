import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseVM } from 'src/ModelVM/ResponseVM';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-MainCategory',
  templateUrl: './MainCategory.component.html',
  styleUrls: ['./MainCategory.component.css']
})
export class MainCategoryComponent implements OnInit {

  constructor(private http:HttpClient,private router:Router) { }

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
  DeleteCategory(Id:any){
    var condel=confirm("Are you sure delete");
    if(condel===false){

    }
    else{
    this.http.delete<any>(`${environment.apiUrl}api/Category/DeleteCategory?CategoryID=${Id}`).subscribe(
      res=>{
        location.reload();
      },
      error=>{
        alert("error");
      }
      
    )
    }
  }
  EditCategory(Category:any){
    localStorage.setItem("Category",JSON.stringify(Category));
    this.router.navigate(['/EditCategory']);

  }
}
