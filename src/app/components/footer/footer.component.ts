import { Component } from '@angular/core';
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faGooglePlus,
  faInstagram,
  faTwitter,
  faSkype,
} from '@fortawesome/free-brands-svg-icons';
import { BasicDetails } from 'src/app/models/basicDetails';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent {
  faFacebook = faFacebook;
  faGithub = faGithub;
  faLinkedin = faLinkedin;
  faGooglePlus = faGooglePlus;
  faInstagram = faInstagram;
  faTwitter = faTwitter;
  faSkype = faSkype;
  isFooterVisible: boolean;
  basicDetails: BasicDetails;

  constructor(
    private sharedServices: SharedService
  ) {
    sharedServices.submittedStatusChange.subscribe(value => {
      if(value) {
        this.basicDetails = sharedServices.getBasicDetails;
      }
      this.isFooterVisible = value;
    })
  }
}
