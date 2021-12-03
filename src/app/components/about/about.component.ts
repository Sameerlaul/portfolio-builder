import { Component, OnInit } from '@angular/core';
import { BasicDetails } from 'src/app/models/basicDetails';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  basicDetails: BasicDetails;

  constructor(
    private sharedServices: SharedService,
  ) { }

  ngOnInit(): void {
    this.basicDetails = this.sharedServices.getBasicDetails;
    console.log(this.basicDetails)
  }

}
