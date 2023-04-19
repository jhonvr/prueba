import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CourseModel, CourseType } from '../model/model';

@Component({
  selector: 'app-modal-courses',
  templateUrl: './modal.component.html'
})

export class ModalCoursesComponent implements OnInit {
  options: FormGroup;
  name: FormControl;
  schedule: FormControl;
  startDate: FormControl;
  endDate: FormControl;
  idCourseType: FormControl;

  courseList: CourseType[] = new Array<CourseType>();

  constructor(
    public dialogRef: MatDialogRef<ModalCoursesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataModalCourse,
    public dialogConfirm: MatDialog,
    fb: FormBuilder
  ) {

    this.courseList = [
      {
        id: 1,
        name: "Presencial"
      },
      {
        id: 2,
        name: "Virtual"
      }
    ];

    this.name = new FormControl(this.data.item?.name, [Validators.required,Validators.max(50)]);
    this.schedule = new FormControl(this.data.item?.schedule, [Validators.required]);
    this.startDate = new FormControl(this.data.item?.startDate, [Validators.required]);
    this.endDate = new FormControl(this.data.item?.endDate, [Validators.required]);
    this.idCourseType = new FormControl(this.data.item?.idCourseType, [Validators.required]);

    this.options =  fb.group({
      id: data.item.id,
      name: this.name,
      schedule: this.schedule,
      startDate: this.startDate,
      endDate: this.endDate,
      courseType: this.idCourseType
    });

  }

  ngOnInit() { }

  send = () => {
    this.dialogRef.close(true);
  }
}

export interface DialogDataModalCourse {
  title: string;
  item: CourseModel;
}
