import {Component, OnInit, Renderer2} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';

@Component({
  selector: 'app-sidenav-demo',
  templateUrl: './sidenav-demo.component.html',
  styleUrls: ['./sidenav-demo.component.css']
})
export class SidenavDemoComponent implements OnInit {
  something = 'hello';
  constructor(private renderer: Renderer2, private http: HttpClient) { }

  ngOnInit() {
    this.http.get('http://thecatapi.com/api/images/get?format=xml&results_per_page=20')
      .catch((err) => { throw new Error('error!!!')})
      .subscribe(data => console.log(data))
  }
  doSomething() {

    alert('Hello')
  }

  seeCursor(element) {
    this.renderer.setStyle(element, 'cursor', 'pointer')
  }
}
