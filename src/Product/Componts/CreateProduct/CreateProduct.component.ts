// app-CreateProduct.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ResponseVM } from 'src/ModelVM/ResponseVM';

@Component({
  selector: 'app-CreateProduct',
  templateUrl: './CreateProduct.component.html',
  styleUrls: ['./CreateProduct.component.css']
})
export class CreateProductComponent implements OnInit {

  responseobj:ResponseVM=new ResponseVM();

  constructor(private http: HttpClient) { }

  fileToUpload: File | null = null;
  onFileSelected(event: any) {
    this.fileToUpload = event.target.files[0];
  }

  onSubmit(formData: any) {
    alert("submit");
    alert(formData.ProductName);
    alert(formData.ProductImageURL);
    alert(formData.Price);
    alert(formData.StockQuantity);
    alert(formData.Description);
    alert(formData.CategoryID);

    const objToSend = new FormData();
    objToSend.append('ProductName', formData.ProductName);
    if (this.fileToUpload != null) {
      objToSend.append('ProductImageURL', this.fileToUpload, this.fileToUpload.name);
    }
    objToSend.append('Price', formData.Price);
    objToSend.append('StockQuantity', formData.StockQuantity);
    objToSend.append('Description', formData.Description);
    objToSend.append('CategoryID', formData.CategoryID);


    this.http.post<any>(`${environment.apiUrl}api/Product/AddProduct`, objToSend)
      .subscribe(res =>{ 
        if(res.success===true){
      }
        else{
          alert(res.message);
        }
      },
      error=>{
        alert("error : "+error.Message);
      }
      
      );
  }
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
}
