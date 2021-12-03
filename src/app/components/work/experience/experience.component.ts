import { Component, OnInit } from '@angular/core';
import { FrontendDevExpModel } from 'src/app/models/frontendDevExpModel';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  frontendExp: FrontendDevExpModel;
  constructor(
    private sharedServices: SharedService,
  ) { }

  ngOnInit(): void {
    this.frontendExp = this.sharedServices.getFrontendExpirence
  }
  
  
}
