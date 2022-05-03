import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../../services/link-path/link-path.service';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public path: LinkPathService,
    public auth: AuthService,
  ) { }

  ngOnInit(): void {
    // SET PATH
    this.path.setPath('login');
    // var localIns = localStorage.getItem('showPopupInstruction');
    // localStorage.setItem('showPopupInstruction', 'false');
    // localStorage.removeItem('showPopupInstruction');

    // CALL FUNC AUTH
    this. onSubmit('email', 'password')
    // this.auth.emailSignin('email', 'password');
  }

  async onSubmit(email:string, password:string){
    // this.auth.emailSignin(email, password);
    let value = {
      email: 'demo@xten-technology.com',
      password: 'dem0x10'
    }
    console.log('value: ', value)
    
    let response = await this.auth.login(value).toPromise();
    console.log('response: ',response)
  }

}
