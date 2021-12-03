import { Injectable } from '@angular/core';
import { BasicDetails } from '../models/basicDetails';
import { WorkDetails } from '../models/workDetails';
import { EducationDetails } from '../models/educationDetails';
import { Subject } from 'rxjs';
import { FrontendDevExpModel } from '../models/frontendDevExpModel';
import { WorkTimeLineModel } from '../models/workTimelineModel';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  basicDetails: BasicDetails;
  workDetails: WorkDetails;
  educationDetails: EducationDetails[];
  frontendDevExperience: FrontendDevExpModel;
  wtDetails: WorkTimeLineModel[];
  submittedStatus: boolean;
  submittedStatusChange: Subject<boolean> = new Subject<boolean>();

  constructor() {
    this.submittedStatusChange.subscribe((value) => {
      console.log("Service", value)
      this.submittedStatus = value;
    })
  }

  onBasicDetailsSave(details: BasicDetails) {
    this.basicDetails = details;
    console.log(this.basicDetails)
  }

  get getBasicDetails() {
    return this.basicDetails;
  }

  onWorkDetailsSave(details: WorkDetails) {
    this.workDetails = details;
    console.log(this.workDetails)
  }

  get getWorkDetails() {
    return this.workDetails;
  }

  onEduDetailsSave(details: EducationDetails[]) {
    this.educationDetails = details;
    console.log(this.educationDetails)
  }

  get getEduDetails() {
    return this.educationDetails;
  }

  onFrontendExpSave(details: FrontendDevExpModel) {
    this.frontendDevExperience = details;
    console.log(this.frontendDevExperience)
  }

  get getFrontendExpirence() {
    return this.frontendDevExperience;
  }

  onWTSave(details: WorkTimeLineModel[]) {
    this.wtDetails = details;
    console.log(this.wtDetails)
  }

  get getWT() {
    return this.wtDetails;
  }
}
