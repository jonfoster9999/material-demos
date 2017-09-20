import { Address } from './../address.model';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {

  address = new Address();

  constructor() { }

  ngOnInit() {

  }

  onSubmit() {
    alert(JSON.stringify(this.address));
  }

}
