import { Component, Inject, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { CourseType } from '../../courses/model/model';
import { StudentsModel } from '../model/model';
import { StudentsService } from 'src/app/shared/students/students.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-modal-courses',
  templateUrl: './modal.component.html',
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
    fb: FormBuilder,
    private studentsService: StudentsService,
    private snackBar: MatSnackBar,
  ) {
    this.name = new FormControl(this.data.item?.name, [
      Validators.required,
      Validators.max(50),
    ]);
    this.lastName = new FormControl(this.data.item?.lastName, [
      Validators.required,
    ]);
    this.age = new FormControl(this.data.item?.age, [Validators.required]);
    this.email = new FormControl(this.data.item?.email, [Validators.required]);
    this.identificationCard = new FormControl(
      this.data.item?.identificationCard,
      [Validators.required]
    );
    // this.idCourseType = new FormControl(this.data.item?.idCourseType, [Validators.required]);

    this.options = fb.group({
      id: data.item.id,
      name: this.name,
      lastName: this.lastName,
      age: this.age,
      identificationCard: this.identificationCard,
      email: this.email,
      // courseType: this.idCourseType
    });
  }

  ngOnInit() {}

  send = () => {
    if (this.data.item.id > 0) {
      this.studentsService.put(this.options.value).subscribe({
        complete: () => {
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.log(err);
          this.errorMessage();
        },
      });
    } else {
      this.studentsService.post(this.options.value).subscribe({
        complete: () => {
          this.dialogRef.close(true);
        },
        error: (err) => {
          console.log(err);
          this.errorMessage();
        },
      });
    }
  };

  errorMessage = () => {
    this.snackBar.open('Ocurrió un error.', 'Ok', {
      horizontalPosition: 'left',
      verticalPosition: 'bottom',
    });
  };
}

export interface DialogDataModalStudents {
  title: string;
  item: StudentsModel;
}
