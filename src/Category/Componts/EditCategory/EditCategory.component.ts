import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CategoryVM } from 'src/ModelVM/CategoryVM';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-EditCategory',
  templateUrl: './EditCategory.component.html',
  styleUrls: ['./EditCategory.component.css']
})
export class EditCategoryComponent implements OnInit {

  constructor(private http: HttpClient,private router:Router) { }
  model: CategoryVM = new CategoryVM();
  model2:any;
  ngOnInit() {
    try {
      const storedData = localStorage.getItem("Category");

      if (storedData) {
        this.model2 = JSON.parse(storedData);
        this.model=this.model2.categoryName;
      } else {
        console.log('Key "Category" not found in localStorage');
      }
    } catch (error) {
      console.error('Error retrieving object from localStorage:', error);
    }
    
  }

  onSubmit(formData2: any) {
    const formData = new FormData();
    formData.append('CategoryName', formData2.CategoryName);

    this.http.put<any>(`${environment.apiUrl}api/Category/UpdateCategory?CategoryID=${this.model2.categoryID}`, formData)
      .subscribe(
        res => {
          console.log(res);
          this.router.navigate(['/Category']);
        },
        error => {
          alert(error.message || 'An error occurred while adding the category.');
          console.error(error);
        }
      );
  }

}
