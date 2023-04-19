import { NgFor, NgForOf, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
  selector: 'app-table',
  standalone: true,
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  imports: [
    NgForOf,
    NgIf,
    SharedModule
  ],
})

export class TableComponent implements OnInit {
  @Input() dataSource: any;
  @Input() displayedColumns!: string[];
  @Output() editEmitter: EventEmitter<any> = new EventEmitter<any>();

  columnsToDisplay: string[] = this.displayedColumns?.slice();

  constructor() { }

  ngOnInit() { }

  edit = (element: any) =>{
    this.editEmitter.emit(element);
  }
}
