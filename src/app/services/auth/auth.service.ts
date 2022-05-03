import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authState: any = null;
  // public loginUrl = 
  
  private headers = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    // 'Access-Control-Allow-Methods': 'POST, GET, OPTIONS',
    // 'Accept': 'application/json',
    // 'Access-Control-Request-Method': 'POST',
    // Authorization: `Bearer ${localStorage.getItem(environment.access_token)}`,
    // Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJkZW1vQHh0ZW4tdGVjaG5vbG9neS5jb20iLCJ1c2VybmFtZSI6ImRlbW8iLCJwcm9qZWN0X2lkIjoxLCJydWxlIjoiQWRtaW4ifQ.PLJ5yoWDidDbjKcPM6r9s8pkrUp5vPAXuYXUBjS5Xro`,
    // 'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwiZW1haWwiOiJkZW1vQHh0ZW4tdGVjaG5vbG9neS5jb20iLCJ1c2VybmFtZSI6ImRlbW8iLCJwcm9qZWN0X2lkIjoxLCJydWxlIjoiQWRtaW4ifQ.PLJ5yoWDidDbjKcPM6r9s8pkrUp5vPAXuYXUBjS5Xro',
    responseType: 'text',
  });

  // public headers = new HttpHeaders({
  //   'Content-Type': 'application/json',
  //     'Access-Control-Allow-Origin': '*',
  //     'Access-Control-Allow-Headers': 'Content-Type',
  //     'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
  // });

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }

  get authenticated(): boolean {
    return this.authState !== null;
  }

  login(value: any) {
    console.log('headers: ', this.headers)
    return this.http.post<any>(`http://103.13.231.185:8080/api/v1/authenticate/`, value, {
      headers: this.headers,
    });
  }

  emailSignin(email: string, password: string) {
    console.log(email, password)
    // let response = await this.rest.login(value).toPromise();
    // this.http.post<any>(`${this.loginUrl}/login`, value, {
    //   headers: this.headers,
    // });
    let value = {
      email: 'demo@xten-technology.com',
      password: 'dem0x10'
    }
    console.log('value: ',value)
    
    let url = `http://103.13.231.185:8080/api/v1/authenticate/`;
    this.http.post<any>( url, value ).subscribe(data => {
      console.log(data.meta.response_data);
    },
    error => {
      console.error(error);
    })

    // this.http.post<any>(`http://103.13.231.185:8080/api/v1/authenticate/`, value, {
    //   headers: this.headers,
    // },);

    // let url = `http://103.13.231.185:8080/api/v1/authenticate/`;
    // this.http.post<any>( url, value, { headers: this.headers } ).subscribe(data => {
    //   console.log(data.meta.response_data);
    // },
    // error => {
    //   console.error(error);
    // })

    // let url = `http://103.13.231.185:8080/api/v1/authenticate/`;
    // this.http.post<any>( url, value ).subscribe(data => {
    //   console.log(data.meta.response_data);
    // },
    // error => {
    //   console.error(error);
    // })
    

  }

//   intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//     // add auth header with jwt if account is logged in and request is to the api url
//     const account = this.accountService.accountValue;
//     const isLoggedIn = account?.token;
//     const isApiUrl = request.url.startsWith(environment.apiUrl);
//     if (isLoggedIn && isApiUrl) {
//         request = request.clone({
//             setHeaders: { Authorization: `Bearer ${account.token}` }
//         });
//     }

//     return next.handle(request);
// }




}