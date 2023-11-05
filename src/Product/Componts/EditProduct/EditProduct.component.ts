import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResponseVM } from 'src/ModelVM/ResponseVM';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-EditProduct',
  templateUrl: './EditProduct.component.html',
  styleUrls: ['./EditProduct.component.css']
})
export class EditProductComponent implements OnInit {

  responseobj:ResponseVM=new ResponseVM();
  model2:any;
  model:any;

  constructor(private http: HttpClient,private router:Router) { }

  // fileToUpload: File | null = null;
  // onFileSelected(event: any) {
  //   this.fileToUpload = event.target.files[0];
  // }

  onSubmit(formData: any) {
    const objToSend = new FormData();
    objToSend.append('ProductName', formData.ProductName);
    objToSend.append('Price', formData.Price);
    objToSend.append('StockQuantity', formData.StockQuantity);
    objToSend.append('Description', formData.Description);
    objToSend.append('CategoryID', formData.CategoryID);


    this.http.put<any>(`${environment.apiUrl}api/Product/UpdateProduct?ProductID=${this.model.productID}`, objToSend)
      .subscribe(res =>{ 
        if(res.success===true){
          this.router.navigate(['/Product']);
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
    try {
      const storedData = localStorage.getItem("product");

      if (storedData) {
        this.model2 = JSON.parse(storedData);
        this.model=this.model2;
      } else {
        console.log('Key "Category" not found in localStorage');
      }
    } catch (error) {
      console.error('Error retrieving object from localStorage:', error);
    }
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
