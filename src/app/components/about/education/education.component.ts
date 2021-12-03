import { Component, OnInit } from '@angular/core';
import { EducationDetails } from 'src/app/models/educationDetails';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  educationDetails: EducationDetails[];

  constructor(
    private sharedServices: SharedService
  ) { }

  ngOnInit(): void {
    this.educationDetails = this.sharedServices.getEduDetails
  }

}
