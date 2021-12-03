import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './components/navbar/navbar.component';
import { AboutComponent } from './components/about/about.component';
import { WorkComponent } from './components/work/work.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './components/footer/footer.component';
import { OfferComponent } from './components/about/offer/offer.component';
import { EducationComponent } from './components/about/education/education.component';
import { IconStackComponent } from './components/work/icon-stack/icon-stack.component';
import { OtherStuffComponent } from './components/work/other-stuff/other-stuff.component';
import { WorkTimelineComponent } from './components/work/work-timeline/work-timeline.component';
import { ExperienceComponent } from './components/work/experience/experience.component';
import { InputComponent } from './components/input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FirstNamePipe } from './shared/pipes/first-name.pipe';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AboutComponent,
    WorkComponent,
    FooterComponent,
    OfferComponent,
    EducationComponent,
    IconStackComponent,
    OtherStuffComponent,
    WorkTimelineComponent,
    ExperienceComponent,
    InputComponent,
    FirstNamePipe,
  ],
  imports: [
    BrowserModule, 
    AppRoutingModule, 
    NgbModule, 
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
