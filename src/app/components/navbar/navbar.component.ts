import { Component } from '@angular/core';
import { BasicDetails } from 'src/app/models/basicDetails';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent  {
  collapsed = true;

  basicDetails: BasicDetails;
  isNavbarVisible: boolean;

  constructor(
    private sharedServices: SharedService
  ){
    sharedServices.submittedStatusChange.subscribe(value => {
      if(value) this.basicDetails = sharedServices.getBasicDetails;
      this.isNavbarVisible = value
    })
  }

  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}
