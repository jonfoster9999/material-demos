import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class AuthServiceService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    console.log('Route: ', route);
    console.log(state);
    const username = window.prompt('Enter your username');
    const password = window.prompt('Enter your password');
    if (username === 'cool' && password === 'password') {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(true);
        }, 20000)
      })
    } else {
      this.router.navigate(['/'])
    }
  }

}
