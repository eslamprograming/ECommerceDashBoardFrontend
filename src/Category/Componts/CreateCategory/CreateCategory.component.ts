import { HttpClient, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CategoryVM } from 'src/ModelVM/CategoryVM';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-CreateCategory',
  templateUrl: './CreateCategory.component.html',
  styleUrls: ['./CreateCategory.component.css']
})
export class CreateCategoryComponent implements OnInit {

  constructor(private http: HttpClient) { }
  model: CategoryVM = new CategoryVM();

  ngOnInit() {
    // Initialization logic if needed
  }

  onSubmit(formData2: any) {
    alert(formData2.CategoryName);
    const formData = new FormData();
    formData.append('CategoryName', formData2.CategoryName);

    this.http.post<any>(`${environment.apiUrl}api/Category/AddCategory`, formData)
      .subscribe(
        res => {
          alert('Category added successfully');
          console.log(res);
        },
        error => {
          alert(error.message || 'An error occurred while adding the category.');
          console.error(error);
        }
      );
  }
}
