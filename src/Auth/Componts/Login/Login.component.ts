import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthVM } from 'src/ModelVM/AuthVM';
import { LoginVM } from 'src/ModelVM/LoginVM';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-Login',
  templateUrl: './Login.component.html',
  styleUrls: ['./Login.component.css']
})
export class LoginComponent implements OnInit {
  ResponseObj:AuthVM=new AuthVM();
  model:LoginVM=new LoginVM();
  constructor(private http:HttpClient,private router:Router) { }

  ngOnInit() {
  }
  onSubmit(){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    this.http.post<any>(`${environment.apiUrl}api/Auth/Login`,this.model,httpOptions).
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
