import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../services/link-path.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public path: LinkPathService,
  ) { }

  ngOnInit(): void {
  }

}
