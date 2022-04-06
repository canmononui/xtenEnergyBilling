import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../../services/link-path.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    public path: LinkPathService,
  ) { }

  ngOnInit(): void {
    // SET PATH
    this.path.setPath('login');
    // var localIns = localStorage.getItem('showPopupInstruction');
    // localStorage.setItem('showPopupInstruction', 'false');
    // localStorage.removeItem('showPopupInstruction');
  }

}
