import { Component, OnInit } from '@angular/core';
import { ModalCoursesComponent } from './components/modal.component';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CoursesService } from 'src/app/shared/courses/courses.service';
import { CourseModel } from './model/model';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.scss'],
})
export class CoursesComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'schedule', 'startDate', 'endDate', 'courseType', 'option'];
  dataSource!: CourseModel[];

  constructor(
    public dialog: MatDialog,
    private snackBar: MatSnackBar,
    private coursesService: CoursesService
  ) {}

  ngOnInit() {
    this.listCourses();
  }

  listCourses = () => {
    this.coursesService.get().subscribe({
      next: (value) => {
          this.dataSource = value;
      },
      error: (err) => {

      },
    })
  }

  addData = () => {
    let courseModel: CourseModel = new CourseModel();
    courseModel.id = 0;
    this.openModal(courseModel);
  };

  edit = (item: CourseModel) => {
    this.openModal(item);
  }

  openModal = (item: CourseModel) => {
    const dialogRef = this.dialog.open(ModalCoursesComponent, {
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
