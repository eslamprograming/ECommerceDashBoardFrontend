import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthVM } from 'src/ModelVM/AuthVM';
import { ResponseVM } from 'src/ModelVM/ResponseVM';
import { UserVM } from 'src/ModelVM/UserVM';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Register',
  templateUrl: './Register.component.html',
  styleUrls: ['./Register.component.css']
})
export class RegisterComponent implements OnInit {

  ResponseObj:AuthVM=new AuthVM();
  model:UserVM=new UserVM();
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  
  onSubmit(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http.post<any>(`${environment.apiUrl}api/Auth/Register`,this.model,httpOptions).
    subscribe(res=>
      {
        this.ResponseObj=res;
        if(res.isAuthenticated){
          localStorage.setItem('token',res.token);
          this.router.navigate(['']);
        }
        if(!res.isAuthenticated){
          alert(res.message);
        }
        console.log(res);
      },
      error=>{
        alert("error");
      })
  }

}
