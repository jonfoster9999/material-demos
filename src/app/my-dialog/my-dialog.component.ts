import { Component, OnInit, Inject } from '@angular/core';
import { MdDialogRef, MD_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-my-dialog',
  templateUrl: './my-dialog.component.html',
  styleUrls: ['./my-dialog.component.css']
})
export class MyDialogComponent {
  
  info: string;

  constructor(private thisDialogRef: MdDialogRef<MyDialogComponent>,
    @Inject(MD_DIALOG_DATA) public data: string) { }

  onCloseConfirm() {
    this.thisDialogRef.close(this.info);
  }

  onCloseCancel() {
    this.thisDialogRef.close('Cancel');
  }
}

