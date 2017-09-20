import { TooltipDemoComponent } from './../tooltip-demo/tooltip-demo.component';
import { MyFormComponent } from './../my-form/my-form.component';
import { Component, OnInit} from '@angular/core';
import { MdSnackBar } from '@angular/material';
import { Subject } from 'rxjs/Subject';


@Component({
  selector: 'app-snackbar-demo',
  templateUrl: './snackbar-demo.component.html',
  styleUrls: ['./snackbar-demo.component.css']
})
export class SnackbarDemoComponent implements OnInit {

  constructor(private snackBar: MdSnackBar) { }
  
  ngOnInit() {
  }



  openSnackBar() {
    let thing = this.snackBar.open("Here is a SnackBar", "Got it!")

  }

}
