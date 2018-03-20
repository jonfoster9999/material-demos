import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent {
  info: string;

  constructor(private thisDialogRef: MatDialogRef<MyDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  onCloseConfirm() {
    this.thisDialogRef.close(this.info);
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}

