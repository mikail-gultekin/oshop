import 'rxjs/add/operator/map';

import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from 'shared/services/auth.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private auth: AuthService, private router: Router) { }

  canActivate(route, state: RouterStateSnapshot) {
    return this.auth.user$.map(user => {
      // tslint:disable-next-line:curly
      if (user) return true;

      this.router.navigate(['login'], { queryParams: { returnUrl: state.url }});
      return false;
    });
  }
}
