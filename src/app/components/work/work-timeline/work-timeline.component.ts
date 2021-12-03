import { Component, OnInit } from '@angular/core';
import { WorkTimeLineModel } from 'src/app/models/workTimelineModel';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-work-timeline',
  templateUrl: './work-timeline.component.html',
  styleUrls: ['./work-timeline.component.scss']
})
export class WorkTimelineComponent implements OnInit {

  wtDetailList: WorkTimeLineModel[];

  constructor(
    private sharedServices: SharedService,
  ) { }

  ngOnInit(): void {
    this.wtDetailList = this.sharedServices.getWT;
  }

}
