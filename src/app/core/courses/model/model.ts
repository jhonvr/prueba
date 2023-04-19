export class CourseModel {
  id!: number;
  name!: string;
  schedule!: string;
  startDate!: string;
  endDate!: string;
  courseType!: string;
  idCourseType!: number;
}

export class CourseType {
  id!: number;
  name!: string;
}
