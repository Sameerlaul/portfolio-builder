import { Component, OnInit } from '@angular/core';

import { WorkDetails } from 'src/app/models/workDetails';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-icon-stack',
  templateUrl: './icon-stack.component.html',
  styleUrls: ['./icon-stack.component.scss'],
})
export class IconStackComponent implements OnInit {
  iconList = [];

  workDetails: WorkDetails;

  constructor(
    private sharedServices: SharedService
  ){}

  ngOnInit() {
    this.workDetails = this.sharedServices.getWorkDetails;
    this.iconList = this.workDetails.userSkills.map(skill => skill.logo)
  }

}
