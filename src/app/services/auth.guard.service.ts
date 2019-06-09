import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from "@angular/router";
import {AuthorizationService} from "./authorization.service";
import {Injectable} from "@angular/core";

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: AuthorizationService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {

    if (this.authService.hasAuthorization()) {
      return true;
    }

    this.router.navigate(['/']);
    return false;
  }
}
