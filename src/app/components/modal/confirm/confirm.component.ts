import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'bcrp-confirm-modal',
  standalone: true,
  templateUrl: './confirm.component.html',
})
export class ModalConfirmComponent implements OnInit {
  constructor(
    public dialogRef: MatDialogRef<ModalConfirmComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData
  ) {}

  ngOnInit() {}

  send = () => {
    this.dialogRef.close(true);
  };
}

export interface DialogData {
  message: string;
}
