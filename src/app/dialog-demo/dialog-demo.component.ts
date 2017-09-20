import { MyFormComponent } from './../my-form/my-form.component';
import { MdDialog } from '@angular/material';
import { Component, OnInit, ElementRef, TemplateRef } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { MyDialogComponent } from 'app/my-dialog/my-dialog.component';



@Component({
  selector: 'app-dialog-demo',
  templateUrl: './dialog-demo.component.html',
  styleUrls: ['./dialog-demo.component.css']
})
export class DialogDemoComponent implements OnInit {

  dialogResult = '';
  constructor(private dialog: MdDialog) { }

  ngOnInit() {

  }

  openDialog() {

    let dialogRef = this.dialog.open(MyDialogComponent, {
      width: '600px',
      height: '300px',
      data: 'This text is passed into the dialog'
    })

    dialogRef.afterClosed()
      .subscribe(result => {
        console.log(`Dialog closed: ${result}`);
        this.dialogResult = result
      })
  }
}
