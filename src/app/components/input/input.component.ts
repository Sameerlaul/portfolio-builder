import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import { SkillsList } from 'src/app/assets/skillsList';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  personalDetails!: FormGroup;
  workDetails!: FormGroup;
  educationalDetails!: FormGroup;
  frontendDevExp!: FormGroup;
  workTimeline!: FormGroup;
  basic_step = false;
  workDetails_step = false;
  frontend_step = false;
  education_step = false;
  workTimeline_step = false;
  step = 1;

  skillsList;
  userSkillsList = [];
  userResponsibilities = [];
  userSkillDesc = [];
  wtResponsibilities = [[]];
  workDetailsSubmitStatus: boolean;

  constructor(
    private formBuilder: FormBuilder,
    private sharedServices: SharedService,
    private router: Router
  ) { }

  ngOnInit() {
    this.personalDetails = this.formBuilder.group({
      name: ['', Validators.required],
      role: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      linkedInUrl: ['', Validators.required],
      fbUrl: [''],
      instaUrl: [''],
      githubUrl: [''],
      tweeterUrl: [''],
      skypeUrl: [''],
    });
    this.workDetails = this.formBuilder.group({
      yearsOfExp: ['', [Validators.required, Validators.max(99), Validators.min(0)]],
      skills: [''],
      responsibility: ['', Validators.maxLength(100)]
    });
    this.educationalDetails = this.formBuilder.group({
      education: this.formBuilder.array([this.initEduFields()])
    });
    this.frontendDevExp = this.formBuilder.group({
      description: ['', [Validators.required, Validators.max(99), Validators.min(0)]],
      skills: [''],
    });
    this.workTimeline = this.formBuilder.group({
      wt: this.formBuilder.array([this.initWorkTimeLine()])
    });

    this.workDetailsSubmitStatus = false;

    let obj = new SkillsList()
    this.skillsList = obj.skills
    console.log(this.skillsList)
  }
  get personal() { return this.personalDetails.controls; }
  get getEducation() { return this.educationalDetails.controls; }
  get getWork() { return this.workDetails.controls; }
  get getFrontendExp() { return this.frontendDevExp.controls; }
  get getWorkTimeline() { return this.workTimeline.controls; }
  get formArr() { return this.educationalDetails.get('education') as FormArray; }
  get formWtArr() { return this.workTimeline.get('wt') as FormArray; }

  getEduItemControl(i) { return this.getEducation.education['controls'][i].controls }
  getWTControl(i) { return this.getWorkTimeline.wt['controls'][i].controls }

  initEduFields() {
    return this.formBuilder.group({
      passingYear: ['', [Validators.required, Validators.max(2025), Validators.min(1947)]],
      field: ['', Validators.required],
      institute: ['', Validators.required],
      city: ['', Validators.required],
      total_marks: ['', [Validators.required, Validators.max(100)]]
    })
  }

  initWorkTimeLine() {
    return this.formBuilder.group({
      startDate: ['', Validators.required],
      endDate: ['', Validators.required],
      jobTitle: ['', Validators.required],
      companyName: ['', Validators.required],
      responsibilities: ['']
    })
  }

  addEducation() {
    this.formArr.push(this.initEduFields())
  }

  removeEduItem(i) {
    this.formArr.removeAt(i)
  }

  addWt() {
    this.formWtArr.push(this.initWorkTimeLine());
    this.wtResponsibilities.push([])
  }

  removeWt(i) {
    this.formWtArr.removeAt(i)
    this.wtResponsibilities.splice(i, 1)
  }

  onSelectSkill() { // add selected skill into user skills List

    let skillObj = this.getWork.skills.value;
    let index = this.userSkillsList.map(skill => skill.name).indexOf(skillObj.name)

    if (index == -1) {
      this.userSkillsList.push(skillObj);
    }
    this.getWork.skills.setValue('')

  }

  removeSkill(index) {
    this.userSkillsList.splice(index, 1)
  }

  addResponsibility() { // Add Responsibility into user responsibility list
    if (this.getWork.responsibility.value) {
      this.userResponsibilities.push(this.getWork.responsibility.value)
      this.getWork.responsibility.setValue('')
    }
  }

  removeResponsibility(index) {
    this.userResponsibilities.splice(index, 1)
  }

  addSkillDescription() {
    if (this.getFrontendExp.skills.value) {
      this.userSkillDesc.push(this.getFrontendExp.skills.value)
      this.getFrontendExp.skills.setValue('')
    }
  }

  rmSkillDescription(index) {
    this.userSkillDesc.splice(index, 1)
  }

  addWtResponsibility(i) {
    if (this.getWTControl(i).responsibilities.value) {
      this.wtResponsibilities[i].push(this.getWTControl(i).responsibilities.value)
    }
    this.getWTControl(i).responsibilities.setValue('')
  }

  removeWtResponsibility(i, j) {
    this.wtResponsibilities[i].splice(j, 1);
  }

  basicDetailsSave() {
    this.sharedServices.onBasicDetailsSave(this.personalDetails.value);
    // console.log(this.sharedServices.getBasicSetails())
  }

  workDetailsSave(obj) {
    this.sharedServices.onWorkDetailsSave(obj)
  }

  frontendExpSave(obj) {
    this.sharedServices.onFrontendExpSave(obj)
  }

  next() {
    if (this.step == 1) {
      this.basic_step = true;
      if (this.personalDetails.invalid) { return }
      this.basicDetailsSave()
      this.step++
    }
    else if (this.step == 2) {
      this.workDetails_step = true;
      if (this.getWork.responsibility.value) this.userResponsibilities.push(this.getWork.responsibility.value)
      this.getWork.responsibility.setValue('');
      if (this.workDetails.invalid || this.userSkillsList.length == 0 || this.userResponsibilities.length == 0) { return }
      this.step++;
      const { skills, responsibility, ...rest } = this.workDetails.value
      // console.log(rest)
      this.workDetailsSave({
        ...rest,
        userSkills: this.userSkillsList,
        userResponsibilities: this.userResponsibilities
      })

    }
    else if (this.step == 3) {
      this.education_step = true;
      if (this.educationalDetails.invalid) { return }
      this.sharedServices.onEduDetailsSave(this.educationalDetails.value.education)
      this.step++;
    }
    else if (this.step == 4) {
      this.frontend_step = true;
      if (this.getFrontendExp.skills.value) this.userSkillDesc.push(this.getFrontendExp.skills.value)
      this.getFrontendExp.skills.setValue('');
      if (this.frontendDevExp.invalid || this.userSkillDesc.length == 0) return;
      this.step++;
      this.frontendExpSave({
        ...this.frontendDevExp.value,
        skills: this.userSkillDesc
      })
    }
  }


  previous() {
    this.step--
    if (this.step == 1) {
      this.basic_step = false;
    }
    if (this.step == 2) {
      this.education_step = false;
    }
    if (this.step == 3) {
      this.education_step = false;
    }
    if (this.step == 4) {
      this.frontend_step = false;
    }
    if (this.step == 5) {
      this.workTimeline_step = false
    }
  }


  submit() {
    if (this.step == 5) {
      this.workTimeline_step = true;
      if (this.workTimeline.invalid) return;
      let wtArr = []
      for (let i = 0; i < this.wtResponsibilities.length; i++) {
        if (this.getWTControl(i).responsibilities.value) this.wtResponsibilities[i].push(this.getWTControl(i).responsibilities.value)
        this.getWTControl(i).responsibilities.setValue('');
        wtArr.push({
          ...this.workTimeline.value.wt[i],
          responsibilities: this.wtResponsibilities[i]
        })
      }
      this.sharedServices.onWTSave(wtArr);
      this.sharedServices.submittedStatusChange.next(true)
      this.router.navigateByUrl('/about');
    }
  }

}
