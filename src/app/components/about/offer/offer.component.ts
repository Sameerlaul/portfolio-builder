import { Component, OnInit } from '@angular/core';
import { WorkDetails } from 'src/app/models/workDetails';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {

  workDetails: WorkDetails;

  constructor(
    private sharedServices: SharedService
  ) { }

  ngOnInit(): void {
    this.workDetails = this.sharedServices.getWorkDetails;
  }

  getSkills() {
    return this.workDetails.userSkills.map(skill => skill.name).toString()
  }

}
