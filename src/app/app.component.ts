import { Component, OnInit } from '@angular/core';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private sharedServices: SharedService) {}

  ngOnInit() {
    this.sharedServices.submittedStatusChange.next(false)
  }
}
