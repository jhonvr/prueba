import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { StudentsModel } from './model/model';
import { ModalStudentsComponent } from './components/modal.component';
import { StudentsService } from 'src/app/shared/students/students.service';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'lastName', 'age', 'email', 'identificationCard', 'option'];
  dataSource!: StudentsModel[];

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private studentsService: StudentsService
  ) {}

  ngOnInit() {
    this.listCourses();
  }

  listCourses = () => {
    this.studentsService.get().subscribe({
      next: (value) => {
          this.dataSource = value;
      },
      error: (err) => {

      },
    })
  }

  addData = () => {
    let courseModel: StudentsModel = new StudentsModel();
    courseModel.id = 0;
    this.openModal(courseModel);
  };

  edit = (item: StudentsModel) => {
    this.openModal(item);
  }

  openModal = (item: StudentsModel) => {
    const dialogRef = this.dialog.open(ModalStudentsComponent, {
      width: '50%',
      data: {
        title: "Nuevo ",
        item: item
      },
    });
    dialogRef.afterClosed().subscribe((resp: any) => {
      if (resp) {
        this.listCourses();
        this.snackBar.open("Registro correcto.", 'Ok', {
          horizontalPosition: 'left',
          verticalPosition: 'bottom',
        });
      }
    });
  }
}
