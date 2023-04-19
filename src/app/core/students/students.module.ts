import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { TableComponent } from '../../components/table/table.component';
import { ReactiveFormsModule } from '@angular/forms';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import {
  MAT_MOMENT_DATE_ADAPTER_OPTIONS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import { StudentsComponent } from './students.component';
import { StudentsRoutingModule } from './students-routing.module';
import { ModalStudentsComponent } from './components/modal.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'MM/DD/YYYY',
  },
  display: {
    dateInput: 'MM/DD/YYYY',
    monthYearLabel: 'MM/DD/YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MM/DD/YYYY',
  },
};

@NgModule({
  declarations: [StudentsComponent, ModalStudentsComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    StudentsRoutingModule,
    TableComponent,
  ],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE, MAT_MOMENT_DATE_ADAPTER_OPTIONS],
    },
    { provide: MAT_DATE_FORMATS, useValue: MY_FORMATS },
  ],
})
export class StudentsModule {}
