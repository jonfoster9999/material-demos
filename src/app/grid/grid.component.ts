import {Component, ElementRef, OnInit} from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  constructor(private el: ElementRef) {
    console.log(this.el.nativeElement.innerText);
  }

  ngOnInit() {
    console.log(this.el.nativeElement.querySelectorAll('div'));
  }

  clickMe() {
  }

  checkSwitch(sw) {
    return sw.checked;
  }
}
