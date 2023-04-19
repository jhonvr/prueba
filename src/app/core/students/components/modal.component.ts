import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CourseType } from '../../courses/model/model';
import { StudentsModel } from '../model/model';

@Component({
  selector: 'app-modal-courses',
  templateUrl: './modal.component.html'
})

export class ModalStudentsComponent implements OnInit {
  options: FormGroup;
  name: FormControl;
  lastName: FormControl;
  age: FormControl;
  email: FormControl;
  identificationCard: FormControl;
  // idCourseType: FormControl;

  courseList: CourseType[] = new Array<CourseType>();

  constructor(
    public dialogRef: MatDialogRef<ModalStudentsComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogDataModalStudents,
    public dialogConfirm: MatDialog,
    fb: FormBuilder
  ) {

    this.name = new FormControl(this.data.item?.name, [Validators.required,Validators.max(50)]);
    this.lastName = new FormControl(this.data.item?.lastName, [Validators.required]);
    this.age = new FormControl(this.data.item?.age, [Validators.required]);
    this.email = new FormControl(this.data.item?.email, [Validators.required]);
    this.identificationCard = new FormControl(this.data.item?.identificationCard, [Validators.required]);
    // this.idCourseType = new FormControl(this.data.item?.idCourseType, [Validators.required]);

    this.options =  fb.group({
      id: data.item.id,
      name: this.name,
      lastName: this.lastName,
      age: this.age,
      identificationCard: this.identificationCard,
      email: this.email
      // courseType: this.idCourseType
    });

  }

  ngOnInit() { }

  send = () => {
    this.dialogRef.close(true);
  }
}

export interface DialogDataModalStudents {
  title: string;
  item: StudentsModel;
}
