import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../../services/link-path/link-path.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(
    public path: LinkPathService,
  ) { }

  ngOnInit(): void {
  }

}
