import { Component, OnInit } from '@angular/core';
import { LinkPathService } from '../../../services/link-path.service';

@Component({
  selector: 'app-modal-sidebar',
  templateUrl: './modal-sidebar.component.html',
  styleUrls: ['./modal-sidebar.component.css']
})
export class ModalSidebarComponent implements OnInit {

  settingMenuShow:any = false;

  constructor(
    public path: LinkPathService,
  ) { }

  ngOnInit(): void {

  }

  onClickSetting(){
    if(this.settingMenuShow){
      this.settingMenuShow = false;
    }
    else {
      this.settingMenuShow = true;
    }
  }

  onClickSettingHide() {
    this.settingMenuShow = false;
  }

}
